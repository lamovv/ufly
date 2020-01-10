const fs = require('fs');
const path = require('path');
const clamUtil = require('clam-util');
const	_ = require('lodash');
const exec = require('child_process').exec;
const webpackConfigGen = require('./webpack.config');

module.exports = grunt => {
  require('time-grunt')(grunt);
  var task = grunt.task;
  const pkg = grunt.file.readJSON('package.json');
  // -------------------------------------------------------------
  // 智能载入模块
  // https://github.com/shootaroo/jit-grunt
  // -------------------------------------------------------------
  require('jit-grunt')(grunt, {
    'webpack-dev-server': 'grunt-webpack',
    'devserver': '@ali/grunt-devserver'
  });

  // ======================= 配置每个任务 ==========================
  grunt.initConfig({
    // 配置默认分支
    currentBranch: 'master',
    clean: {
      dist: ['dist'],
      demo: ['dist/demo/**/*.{js,css,map}']
    },
    // git命令
    exec: {
      tag: {
        command: 'git tag publish/<%= currentBranch %>'
      },
      publish: {
        command: 'git push origin publish/<%= currentBranch %>:publish/<%= currentBranch %>'
      },
      commit: {
        command: function(msg) {
          var cmd = 'git commit -m "<%= currentBranch %> - <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %>"';
          if (msg) {
						cmd = `git commit -m ${msg}`;
          }
          return cmd;
        }
      },
      add: {
        command: 'git add . -A'
      },
      prepub: {
        command: 'git push origin daily/<%= currentBranch %>:daily/<%= currentBranch %>'
      },
      newbranch: {
        command: 'git checkout -b daily/<%= currentBranch %>'
      },
      es: {
        command: 'tnpm run build'
      }
    },
    devserver: {
      main: {
        options: {
          webpackConfig: () => webpackConfigGen(true),
          openPath:'/demo/index.html',
          hosts: [
            'dev.wapa.taobao.com',
            'dev.m.taobao.com',
            'dev.waptest.taobao.com'
          ]
        }
      }
    },
		eslint: {
			target: [
			  './src/**.js'
      ]
		}
  });

  // =======================  注册Grunt任务  ==========================
  // 自动化测试
  grunt.registerTask('test', '自动化测试', function (type) {
      if (type == 'dev') {
          process.env.TestDev = true;
      }
      task.run([
          'devserver'
      ]);
  });

  /**
   * 开发调试
   */
  grunt.registerTask('dev', '本地开发模式', [
    'devserver'
  ]);

  /**
   * 预发布
   */
  grunt.registerTask('prepub', '文件预发布', function (msg) {
    var done = this.async();
    clamUtil.getBranchVersion(function (version) {
      grunt.log.write(('当前分支：' + version).green);
      grunt.config.set('currentBranch', version);
      task.run([
        'build',
        'clean:prepub',
        'exec:add',
        'exec:commit:'+ msg,
        'exec:prepub'
      ]);
      done();
    });
  });

  /**
   * 正式发布
   */
  grunt.registerTask('publish', '文件发布', function (msg) {
    var done = this.async();
    clamUtil.getBranchVersion(function (version) {
      grunt.log.write(('当前分支：' + version).green);
      grunt.config.set('currentBranch', version);
      task.run([
        'prepub:'+ msg,
        'exec:tag',
        'exec:publish'
      ]);
      done();
    });
  });

  grunt.registerTask('build', '默认构建流程', function () {
		task.run([
			'clean',
			'eslint',
      'clean:demo',
      'exec:es'
		]);
	});

  /*
   * 获取当前最大版本号，并创建新分支
   **/
  grunt.registerTask('newbranch', '新建项目分支', function (type) {
    var done = this.async();
    exec('git branch -a & git tag', function (err, stdout, stderr, cb) {
      var versions = stdout.match(/\d+\.\d+\.\d+/ig),
        r = clamUtil.getBiggestVersion(versions);
      // r = [0, 3, 27];
      if (!r || !versions) {
        r = '0.1.0';
      } else if (type == 'major') {
        r[0]++;
        r[1] = 0;
        r[2] = 0;
        r = r.join('.');
      } else if (type == 'minor') {
        r[1]++;
        r[2] = 0;
        r = r.join('.');
      } else {
        r[2]++;
        r = r.join('.');
      }
      grunt.log.write(('新分支：daily/' + r).green);
      grunt.config.set('currentBranch', r);
      task.run(['exec:newbranch']);
      // 回写入 package.json 的 version
      try {
        var pkgJSONPath = path.resolve(process.cwd(), 'package.json');
        pkgJSON = require(pkgJSONPath);
        pkgJSON.version = r;
        grunt.file.write(pkgJSONPath, JSON.stringify(pkgJSON, null, 2));
        grunt.log.ok('update package.json.');
      } catch (e) {
        grunt.log.error('Package.json not found!');
      }
      done();
    });
  });

  // =======================  注册Grunt主流程  ==========================

  return grunt.registerTask('default', '默认构建流程', function (type) {
    var done = this.async();

    // 获取当前分支
    exec('git branch', function (err, stdout, stderr, cb) {

      var reg = /\*\s+daily\/(\S+)/,
        match = stdout.match(reg);

      // // if (!match) {
      // //   grunt.log.error('当前分支为 master 或者名字不合法(daily/x.y.z)，请切换到daily分支'.red);
      // //   grunt.log.error('创建新daily分支：grunt newbranch'.yellow);
      // //   return;
      // // }
      // // grunt.log.write(('当前分支：' + match[1]).green);
      // grunt.config.set('currentBranch', match[1]);
      done();
    });

    // 构建
    if (!type) {
      task.run(['build']);
    }
  });
};
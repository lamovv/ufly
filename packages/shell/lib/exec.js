const shell = require('shelljs');
const sh = require('shelljs');
const execSync = require('child_process').execSync;

exports.npmrun = async script =>
  new Promise((resolve, reject) => {
    // yarn可用
    if (!sh.which('yarn')) {
      execSync('npm i -g yarn');
    }
    // // 优化yarn源
    // const registry = sh.exec('yarn config get registry', {silent: true}).stdout;
    // if(registry == 'https://registry.npmjs.org/'){
    //   sh.exec('yarn config set registry https://registry.npmmirror.com', {silent: true})
    // }

    shell.exec(
      `yarn ${script}`,
      {
        async: true,
        silent: true
      },
      (code, stdout, stderr) => {
        if (code > 0) {
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  });

exports.npmi = async module =>
  new Promise((resolve, reject) => {
    shell.exec(
      'npm i --no-package-lock',
      {
        async: true,
        silent: true
      },
      (code, stdout, stderr) => {
        if (code > 0) {
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  });

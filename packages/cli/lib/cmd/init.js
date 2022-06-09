const ora = require('ora');
const chalk = require('chalk');

const sh = require('@ufly/shell');
const tpls = require('@ufly/tpm');
const inquirers = require('@ufly/inquirer');
const ugit = require('@ufly/git');
const { addRemote } = ugit;

module.exports = {
  command: 'init [-t] [type]',
  aliases: ['yo'],
  desc: '创建项目：ufly init -t module-js',
  // 子命令init 的参数配置
  builder(yargs){
    yargs.option('t', {
      alias: 'type',
      demand: false,
      describe: '项目类型',
      type: 'string'
    })
      .usage('Usage: init [options]')
      .example('init -t module-js', '直接创建js module')
  },
  
  //处理子命令接受到的参数
  async handler(argv){
    const answers = {};

    const initInquirer = inquirers.splice(-1)[0];
    for(let i=0,l=inquirers.length; i<l; i++){
      const inquirer = inquirers[i];
      if(inquirer){
        const answer = await inquirer(tpls, argv.type);
        Object.assign(answers, answer);
      }
    }

    const {
      isCurrent,
      dirName,
      projectType: pType,
      repository
    } = answers;

    const spinner = ora({color: 'green'}).start(`${chalk.magenta(`${pType} 创建中...`)}`);
    // 是否在当前目录创建项目，若否，需新建目录并进入新建目录
    if (!isCurrent) {
      const err = sh.dir.mkdirAndcd(dirName);
      if (err) {
        return spinner.fail(
          `${pType} 创建异常： ${err.code}-${err.message}\n`
        );
      }
    }

    let err;
    const tplModule = tpls[pType];
    if(tplModule){
      err = await tplModule(answers);
      if(err){
        return spinner.fail(`${pType} 创建异常： ${err.code}-${err.message}\n`);
      }
    }else{
      err = {
        code: 404,
        message: '暂不支持，建设中...\n'
      };
      spinner.fail(`${pType} ${err.message}`);
    }

    if(!err){
      // 自动加入git remote
      if(repository){
        addRemote(repository);
      }

      spinner.succeed(`${chalk.green(`${answers.name} ${pType} 已创建完成`)}`);
      const initAnswer = await initInquirer();
      if(initAnswer.isInit){
        spinner.start(`${chalk.magenta('正在安装依赖等初始化操作...\n')}`);
        const done = await sh.exec.npmrun('i -s').catch(e => {
          spinner.fail(`${chalk.red(`安装依赖等初始化操作失败，需手动执行 ${chalk.yellow.bold('npm run init')} 完成`)}`);
        });
        if(done){
          spinner.succeed(`${chalk.green(`${answers.name} ${pType} 已初始化完成，${!isCurrent ? chalk.yellow.bold(` cd ${dirName} 进入项目，`): ''}执行 ${chalk.yellow.bold(' yarn dev ')} 进入开发`)}\n`);
        }
      }
    }
  }
};
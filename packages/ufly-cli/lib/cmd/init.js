const fse = require('fs-extra');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');

const sh = require("ufly-shell");
const tpls = require('ufly-tpm');

const project = require('./setting/project');
const author = require('./setting/author');

module.exports = {
  command: ['init', 'yo'],
  describe: '初始化项目',
  // 子命令的配置
  builder: yargs => {
    yargs.option('t', {
      alias: 'type',
      demand: false,
      default: 'mpi',
      describe: '项目类型',
      type: 'string'
    })
    .example('fly init -t module')
  },
  
  //处理子命令接受到的参数
  handler: async argv => {
    const prompts = [];
    const answersPro = await project(tpls);
    const answersAuthor = await author();
    const answers = Object.assign({}, answersPro, answersAuthor);

    const {
      isCurrent,
      dirName,
      projectType: pType
    } = answers;

    const spinner = ora({color: 'green'}).start(`${chalk.magenta(`${pType} 创建中...`)}`);
    // 是否在当前目录创建项目，若否，需新建目录并进入新建目录
    if (!isCurrent) {
      const err = sh.dir.mkdir1cd(dirName);
      if (err) {
        return spinner.fail(
          `${pType} 创建异常： ${err.code}-${err.message}\n`
        );
      }
    }

    let err;
    const tplModule = tpls[pType];
    if(tplModule){
      let err = await tplModule(answers);
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
      spinner.succeed(`${chalk.green(`${pType} 已创建完成`)}`);
      spinner.start(`${chalk.magenta('正在初始化...\n')}`);
      try{
        sh.exec.npm('init -s');
      }catch(e){
        spinner.fail(`${chalk.magenta(`自动初始化失败，请手动执行 ${chalk.yellow.bold('npm run init')} 完成初始化`)}`);
      }
      spinner.succeed(`${chalk.green(`${pType} 已初始化完成，请执行 ${chalk.yellow.bold(' npm run dev:open ')} 进入开发`)}\n`);
    }
  }
};
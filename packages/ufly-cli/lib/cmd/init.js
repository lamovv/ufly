const fse = require('fs-extra');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');

const sh = require("ufly-shell");
const tpls = require('ufly-tpm');
const inquirers = require('ufly-inquirer');

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
    const answers = {};

    const initInquirer = inquirers.splice(-1)[0];
    for(let i=0,l=inquirers.length; i<l; i++){
      const inquirer = inquirers[i];
      if(inquirer){
        const answer = await inquirer(tpls);
        Object.assign(answers, answer);
      }
    }

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
      spinner.succeed(`${chalk.green(`${answers.name} ${pType} 已创建完成`)}`);
      const initAnswer = await initInquirer();
      if(initAnswer.isInit){
        spinner.start(`${chalk.magenta('正在安装依赖等初始化操作...\n')}`);
        try{
          await sh.exec.npm('init -s');
        }catch(e){
          spinner.fail(`${chalk.magenta(`安装依赖等初始化操作，请手动执行 ${chalk.yellow.bold('npm run init')} 完成`)}`);
        }
        spinner.succeed(`${chalk.green(`${pType} 已初始化完成，请执行 ${chalk.yellow.bold(' npm run dev:open ')} 进入开发`)}\n`);
      }
    }
  }
};
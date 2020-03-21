const fse = require('fs-extra');
const path = require('path');
const ora = require('ora');

const tplLoader = require('ufly-tpl-loader');
const tplModule = require('ufly-tpl-module');

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
    const answersPro = await project();
    const answersAuthor = await author();
    const answers = Object.assign({}, answersPro, answersAuthor);

    const {
      projectType: pType
    } = answers;

    const spinner = ora({color: 'green'}).start(`${pType} 创建中...`);

    let err;
    switch (pType) {
      case 'module':
        err = await tplModule(answers);
        if(err){
          return spinner.fail(`${pType} 创建异常，请重试。 ${err.code}-${err.message}`);
        }
        break;
      default:
        err = {
          code: 404,
          message: '暂不支持，在建设中...静请期待'
        };
        spinner.fail(`${pType} ${err.message}`);
        // err = await tplApp(answers);
        // if(err){
        //   return spinner.fail(`${pType} 创建异常，请重试。 ${err.code}-${err.message}`);
        // }
        break;
    }

    if(!err){
      spinner.succeed(`${pType} 项目准备完成，请进入开发`);
    }
  }
};
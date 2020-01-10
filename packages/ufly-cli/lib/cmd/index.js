const yargs = require('yargs');
const utils = require('ufly-util');

const {
  log
} = utils;

const init = require('./init');

function cmd() {
  yargs
    // .option('v', {
    //   alias: 'version',
    //   demand: false, // 是否必填
    //   default: '1.0.0',
    //   describe: '请输入项目版本号 x.y.z',
    //   type: 'string'
    // })

    //子命令 command
    .command(init)

    .command(require('./default'))
    // <command> 表示command为必填；[options] 表示options为选填
    .usage('Usage: $0 <command> [options]')
    .help('h')
    .alias('h', 'help')
    .version()
    .alias('v', 'version')
    .example('fly init')
    .epilog('copyright 2020').argv;
}

module.exports = cmd;
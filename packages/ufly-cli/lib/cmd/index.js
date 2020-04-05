const yargs = require('yargs');

const init = require('./init');

function cmd() {
  yargs
    .command(require('./default'))
    //子命令 command
    .command(init)
    // <command> 表示command为必填；[options] 表示options为选填
    .usage('Usage: $0 <command> [options]')
    .help('h', '帮助文档')
    .alias('h', 'help')
    .version()
    .alias('v', 'version')
    .example('ufly init', '创建项目')
    .default('help')
    .epilog('copyright 2020')
    .argv;
}

module.exports = cmd;
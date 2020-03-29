const yargs = require('yargs');

const init = require('./init');

function cmd() {
  yargs
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
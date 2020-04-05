const chalk = require('chalk');
const figlet = require('figlet');
const log = console.log;

module.exports = {
  command: '*',
  desc: 'main command',
  //处理子命令接受到的参数
  handler(argv){
    log(
      chalk.hex('#1890ff').bold.italic(
        figlet.textSync('   uFly', {
          horizontalLayout: 'full'
        })
      )
    );
  }
}
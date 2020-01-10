const chalk = require('chalk');
const log = console.log;

module.exports = {
  command: '*',
  describe: 'default command',
  //处理子命令接受到的参数
  handler(){
    log(chalk.red('Fly'));
  }
}
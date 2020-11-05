/**
 * 安装依赖等初始化操作
 */
const inquirer = require('inquirer');

function setting(tpls) {
  let options = [
    {
      type: 'confirm',
      name: 'isInit',
      message: '是否安装依赖，完成初始化操作',
    },
  ];

  return inquirer.prompt(options).then((answers) => {
    return answers;
  });
}

module.exports = setting;

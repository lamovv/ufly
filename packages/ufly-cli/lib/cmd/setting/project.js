const inquirer = require('inquirer');
const fs = require('fs-extra');

function setting() {
  let options = [
    {
      type: 'confirm',
      message: '在当前目录创建：',
      name: 'isCurrent'
    },
    {
      type: 'input',
      name: 'dirName',
      message: '请输入要创建的目录名，用于初始化项目：',
      validate(input) {
        if (!input) {
          return '请指定要创建的目录名';
        }
        return true;
      },
      // 当 isCurrent 为 false 时增加目录创建
      when: function(answers) {
        return !answers.isCurrent;
      }
    },
    {
      type: 'rawlist',
      message: '请选择项目类型：',
      name: 'projectType',
      choices: [
        'module',
        'app',
        'demo',
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: '项目名：',
      validate(input) {
        if (!input) {
          return '请指定项目名';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'description',
      message: '简要描述：',
      default: '> description'
    },
    {
      type: 'list',
      name: 'version',
      message: '起始版本号',
      choices: [
        '1.0.0',
        '0.1.0',
        '0.0.1'
      ]
    },
    {
      type: 'input',
      name: 'author',
      message: 'author <email>：'
    }
  ];

  return inquirer.prompt(options);
}

module.exports = setting;
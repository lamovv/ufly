/**
 * 记录用户基本信息
 */
const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');

const tmpPath = path.join(os.homedir(), '.ufly/.authrc');

function setting() {
  let cache = {};
  if(fs.pathExistsSync(tmpPath)){
    cache = fs.readJsonSync(tmpPath);
  }

  let options = [
    {
      type: 'input',
      name: 'author',
      message: 'author',
      default: cache.author || ''
    },
    {
      type: 'input',
      name: 'email',
      message: 'email',
      default: cache.email || ''
    }
  ];

  return inquirer.prompt(options).then(answers => {
    fs.outputJson(tmpPath, answers);
    return answers;
  });
}

module.exports = setting;
/**
 * 记录用户基本信息
 */
const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const ugit = require('@ufly/git');
const { getUser } = ugit;

const tmpPath = path.join(os.homedir(), '.ufly/.authrc');

function setting() {
  let cache = getUser();
  if (!cache.author || !cache.email) {
    if (fs.pathExistsSync(tmpPath)) {
      const _cache = fs.readJsonSync(tmpPath);
      cache.author = cache.author || _cache.author;
      cache.email = cache.email || _cache.email;
    }
  }

  let options = [
    {
      type: 'input',
      name: 'author',
      message: 'author',
      default: cache.author || '',
    },
    {
      type: 'input',
      name: 'email',
      message: 'email',
      default: cache.email || '',
    },
  ];

  return inquirer.prompt(options).then((answers) => {
    fs.outputJson(tmpPath, answers);
    return answers;
  });
}

module.exports = setting;

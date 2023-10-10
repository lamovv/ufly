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
  const gitUserInfo = getUser();
  let { author, email } = gitUserInfo;

  if (!author || !email) {
    if (fs.pathExistsSync(tmpPath)) {
      const cache = fs.readJsonSync(tmpPath);
      author = author || cache.author;
      email = email || cache.email;
    }
  }

  let options = [
    {
      type: 'input',
      name: 'author',
      message: 'author',
      default: author || '',
      when(answers) {
        return !author;
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'email',
      default: email || '',
      when(answers) {
        return !email;
      },
    },
  ];

  return inquirer.prompt(options).then(answers => {
    const userInfo = Object.assign(
      {
        author,
        email,
      },
      answers
    );
    fs.outputJson(tmpPath, userInfo);
    return userInfo;
  });
}

module.exports = setting;

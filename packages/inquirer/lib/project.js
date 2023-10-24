const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const ugit = require('@ufly/git');
const { getRepo } = ugit;

const tmpPath = path.join(os.homedir(), '.ufly/.prorc');

function setting(tpls, type) {
  let cache = {};
  if (fs.pathExistsSync(tmpPath)) {
    try {
      cache = fs.readJsonSync(tmpPath);
    } catch (e) {
      cache = {};
    }
  }
  const repository = getRepo();
  if (repository) {
    cache.repository = repository;
  }

  //项目类型
  const types = Object.keys(tpls);
  const isdef = !!~types.indexOf(type);

  let options = [
    {
      type: 'confirm',
      name: 'isCurrent',
      message: '在当前目录创建：',
    },
    {
      type: 'input',
      name: 'dirName',
      default: cache.dirName || '',
      message: '输入目录名，用于创建项目：',
      validate(input) {
        if (!input) {
          return '指定要创建的目录名';
        }
        return true;
      },
      // 当 isCurrent 为 false 时增加目录创建
      when(answers) {
        return !answers.isCurrent;
      },
    },
    {
      type: 'rawlist',
      name: 'projectType',
      message: '选择项目类型：',
      choices: types,
      validate(input) {
        if (!tpls[input]) {
          return `${input} 暂不支持，建设中...请选择其他项创建`;
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'scope',
      default: cache.scope || '',
      message: 'npm包scope：',
      filter(input) {
        if (input) {
          input = /^@/.test(input) ? input : `@${input}`;
          return /\/$/.test(input) ? input : `${input}/`;
        }
        return '';
      },
      when(answers) {
        return /^module|component/.test(answers.projectType);
      },
    },
    {
      type: 'input',
      name: 'name',
      default: cache.name || '',
      message: '名称：',
      validate(input) {
        if (!input) {
          return '指定应用或组件模块名';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'description',
      default: cache.description || '> description',
      message: '简要描述：',
    },
    {
      type: 'input',
      name: 'keywords',
      default: cache.keywords || '',
      message: '关键字',
    },
    {
      type: 'list',
      name: 'version',
      default: cache.version || '',
      message: '起始版本号',
      choices: ['1.0.0', '0.1.0', '0.0.1'],
    },
    {
      type: 'input',
      name: 'repository',
      default: cache.repository || '',
      message: '仓库地址〔git〕',
    },
  ];

  return inquirer.prompt(options).then(answers => {
    fs.outputJson(tmpPath, answers || {});

    if (isdef) {
      return Object.assign(
        {
          projectType: type,
        },
        answers
      );
    }
    return answers;
  });
}

module.exports = setting;

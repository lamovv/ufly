'use strict';

const path = require('path');
const ejs = require('ejs');
const async = require('async');
const mlsm = require('metalsmith');
const compile = require('handlebars').compile;
const util = require('ufly-util');
const sh = require('ufly-shell');


async function tplModule(data, options = {}){
  const {
    isCurrent,
    dirName
  } = data;
  // 是否在当前目录创建项目，若否，需新建目录并进入新建目录
  if(!isCurrent){
    const err = sh.dir.mkdir1cd(dirName);
    if(err){
      return spinner.fail(`${pType} 创建异常，请重试。 ${err.code}-${err.message}`);
    }
  }

  await processTpls({
    date: util.date('Y/m/d H:i'),
    ...data
  });
}

function processTpls(data, options = {}){
  return new Promise((resolve, reject) => {
    mlsm(process.cwd())
      .metadata(data)
      .clean(false)
      .source(path.resolve(__dirname, '../tpl'))
      .destination(process.cwd())
      .use(renderTpls)
      .build(err => {
        if(err){
          reject(err);
        }else{
          resolve();
        }
      });
  });    
}

function renderTpls(files, metalsmith, done) {
  const keys = Object.keys(files);
  const metadata = metalsmith.metadata();

  async.each(keys, (filename, next) => {
    const str = files[filename].contents.toString();

    if (!/{{([^{}]+)}}/g.test(str)) {
      return next();
    }

    const render = compile(str, metadata);
    const result = render(metadata);
    files[filename].contents = new Buffer(result);
    next();
  }, done)
}

module.exports = tplModule;

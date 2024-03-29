'use strict';
const path = require('path');
const async = require('async');
const mlsm = require('metalsmith');
const compile = require('handlebars').compile;
const util = require('@ufly/util');

async function tplModule(data, options = {}) {
  await processTpls(
    Object.assign(
      {
        date: util.date('Y/m/d H:i'),
      },
      data,
      options
    )
  );
}

function processTpls(data) {
  data.comName = data.name.replace(/^.|[-_]./g, char => {
    return char.replace(/^-|_/, '').toUpperCase();
  });

  return new Promise((resolve, reject) => {
    mlsm(process.cwd())
      .metadata(data)
      .clean(false)
      .source(path.resolve(__dirname, '../tpl'))
      .destination(process.cwd())
      .use(renderTpls)
      .build(err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
  });
}

function renderTpls(files, metalsmith, done) {
  const keys = Object.keys(files);
  const metadata = metalsmith.metadata();

  async.each(
    keys,
    (filename, next) => {
      const str = files[filename].contents.toString();

      // 订正 .* 文件
      if (/^_[^_]+/i.test(filename)) {
        const _filename = filename.replace(/^_/i, '.');
        files[_filename] = files[filename];
        delete files[filename];
        return next();
      }
      // 订正 *.tpl 文件
      if (/\.tpl$/i.test(filename)) {
        const _filename = filename;
        filename = _filename.replace(/\.tpl$/i, '');
        files[filename] = files[_filename];
        delete files[_filename];
      }

      if (!/[^$]{{([^{}]+)}}/g.test(str)) {
        return next();
      }

      const render = compile(str, metadata);
      const result = render(metadata);
      files[filename].contents = Buffer.from(result);
      next();
    },
    done
  );
}

module.exports = tplModule;

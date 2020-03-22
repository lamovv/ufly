'use strict';
const fs = require('fs-extra');
const sh = require('shelljs');

exports.install = _ => {
  const cmd = `yarn`;
  return sh.exec(cmd);
};

exports.getPkg = pkg => {
  const cmd = `npm pack ${pkg}`;
  // console.log(cmd);
  return sh.exec(cmd);
};
// npm pack

exports.linked = async pkg => {
  // const _linked = fs.path
};
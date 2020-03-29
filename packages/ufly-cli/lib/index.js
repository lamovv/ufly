'use strict';
// const path = require('path');
// const pkg = require('../package.json');

const cmd = require('./cmd/index');

function cli() {
  // const pkgPath = path.resolve(__dirname, '../');
  cmd();
}

module.exports = cli;

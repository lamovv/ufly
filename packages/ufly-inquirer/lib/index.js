'use strict';
const project = require('./project');
const author = require('./author');
const init = require('./init');

function inquirer() {
  return [project, author, init];
}

module.exports = inquirer();

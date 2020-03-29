'use strict';
const project = require('./project');
const author = require('./author');

function inquirer() {
  return [project, author];
}

module.exports = inquirer();

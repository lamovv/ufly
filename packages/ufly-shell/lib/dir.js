const shell = require('shelljs');

function mkdir1cd(dir) {
  shell.mkdir(dir);
  shell.cd(dir);
}

module.exports = {
  mkdir1cd
}
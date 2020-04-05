const shell = require('shelljs');

function mkdirAndcd(dir) {
  shell.mkdir(dir);
  cd(dir);
}

function cd(dir) {
  shell.cd(dir);
}

module.exports = {
  cd,
  mkdirAndcd
};

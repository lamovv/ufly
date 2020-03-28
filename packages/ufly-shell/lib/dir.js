const shell = require('shelljs');

function mkdir1cd(dir) {
  shell.mkdir(dir);
  cd(dir);
}

function cd(dir) {
  shell.cd(dir);
}

module.exports = {
  cd,
  mkdir1cd,
};

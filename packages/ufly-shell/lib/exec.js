const shell = require('shelljs');

exports.npm = (script) => {
  shell.exec(`npm run ${script}`);
};

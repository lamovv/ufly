const shell = require('shelljs');

exports.npmrun = async script =>
  new Promise(resolve => {
    shell.exec(
      `npm run ${script}`,
      {
        async: true,
        silent: true
      },
      (code, stdout, stderr) => {
        resolve();
      }
    );
  });

exports.npmi = async module =>
  new Promise(resolve => {
    shell.exec(
      'npm i --no-package-lock',
      {
        async: true,
        silent: true
      },
      (code, stdout, stderr) => {
        resolve(true);
      }
    );
  });

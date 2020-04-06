const shell = require('shelljs');

exports.npmrun = async script =>
  new Promise((resolve, reject) => {
    shell.exec(
      `npm run ${script}`,
      {
        async: true,
        silent: true
      },
      (code, stdout, stderr) => {
        if (code > 0) {
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  });

exports.npmi = async module =>
  new Promise((resolve, reject) => {
    shell.exec(
      'npm i --no-package-lock',
      {
        async: true,
        silent: true
      },
      (code, stdout, stderr) => {
        if (code > 0) {
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  });

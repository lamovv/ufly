const shell = require('shelljs');

exports.npm = async (script) =>
  new Promise((resolve) => {
    shell.exec(
      `npm run ${script}`,
      {
        async: true,
        silent: true,
      },
      (code, stdout, stderr) => {
        resolve();
      }
    );
  });

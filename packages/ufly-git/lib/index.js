'use strict';

const sh = require('shelljs');

if (!sh.which('git')) {
  sh.echo('Sorry, this script requires git');
  sh.exit(1);
}

// name、email
exports.getUser = field => sh.exec(`git config --get user.${field}`) || null;

// module.exports = uflyGit;

// function uflyGit() {
//     // TODO
// }

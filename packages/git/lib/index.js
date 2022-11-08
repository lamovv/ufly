'use strict';
const sh = require('shelljs');

if (!sh.which('git')) {
  sh.echo('Sorry, this script requires git.');
  sh.exit(1);
}

const getConfig = field => {
  return sh.exec(`git config --get ${field}`, { silent: true }) || null;
};

const getUser = _ => {
  const name = (getConfig('user.name') || '').replace(/\s*$/, '');
  const email = (getConfig('user.email') || '').replace(/\s*$/, '');

  return {
    author: name,
    email,
  };
};

const getRepo = _ => {
  const repo = (getConfig('remote.origin.url') || '').replace(/\s*$/, '');
  return repo;
};

const addRemote = remote => {
  sh.exec('git init', { silent: true });
  sh.exec(`git remote add origin ${remote}`, { silent: true });
  sh.exec('git add .', { silent: true });
  sh.exec('git commit -m "chore(): init"', { silent: true });
};

module.exports = {
  getUser,
  getRepo,
  getConfig,
  addRemote,
};

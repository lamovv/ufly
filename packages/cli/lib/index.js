'use strict';
const autoUpdate = require('./utils/autoupdate');
const cmd = require('./cmd');

async function cli() {
  const r = await autoUpdate();
  if (r) {
    cmd();
  }
}
module.exports = cli;

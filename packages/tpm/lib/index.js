'use strict';
// const fs = require('fs-extra');

// const tplPath = path.join(os.homedir(), '.ufly/.tplrc');
// // tplname : tpl-package
let tplrc = {
  'module-js': '@ufly/tpl-module-js',
  'module-ts': '@ufly/tpl-module-ts',
  'module-wasm': '@ufly/tpl-module-wasm',
  'project-h5(WebApp)': null,
  'modules-lerna': null
};
// if (fs.pathExistsSync(tplPath)) {
//   tplrc = fs.readJsonSync(tplPath);
// }

const tpls = {};
for (let k in tplrc) {
  if (tplrc[k]) {
    tpls[k] = require(`${tplrc[k]}`);
  } else {
    tpls[k] = null;
  }
}

module.exports = tpls;

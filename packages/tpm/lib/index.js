'use strict';
// const fs = require('fs-extra');

// const tplPath = path.join(os.homedir(), '.ufly/.tplrc');
// // tplname : tpl-package
let tplrc = {
  'component-react': '@ufly/tpl-component-react',
  'module-ts': '@ufly/tpl-module-ts',
  'module-js': '@ufly/tpl-module-js',
  'module-wasm': '@ufly/tpl-module-wasm',
  'app-h5': null,
  'app-pc': null,
  'monorepo': null
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

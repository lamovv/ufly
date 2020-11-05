'use strict';
import instantiate from './assembly/index.ts';

const fooImports = {
  env: {
    gValue: 666,
    log: console.log,
    abort: function abort(message, source, lineno, colno) {
      throw Error(`abort: ${message} at ${source}:${lineno}:${colno}`);
    },
  },
};

// Promise<fooModule>
const fooP = instantiate(fooImports);

/**
 * @param {string} a
 * @param {string} b
 * @param {number} digit
 * @returns {Promise<number>}
 */
export async function compareVersion(a, b, digit) {
  return fooP.then((fooMod) => {
    let { compareVersion, __allocString, __retain, __release } = fooMod;

    const va = __retain(__allocString(a));
    const vb = __retain(__allocString(b));
    const r = compareVersion(va, vb);
    __release(va);
    __release(vb);
    return r;
  });
}

export default fooP;

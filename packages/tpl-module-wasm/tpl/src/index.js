'use strict';
import instantiate from './assembly/index.ts';

// 共享内存
const fooImports = {
  env: {
    vdata: 666,
    logi: console.log,
    logs: console.log
  }
};

// Promise<fooModule>
const fooP = instantiate(fooImports);

/**
 * @param {string} a
 * @param {string} b
 * @param {number=} digit
 * @returns {Promise<number>}
 */
export async function compareVersion(a, b, digit=3) {
  return fooP.then(({ exports }) => {
    // 使用 exports 上挂载的实用方法获取 JS ”对象“数据内存地址，供 Wasm 使用: https://www.assemblyscript.org/loader.html#module-instance-utility
    let { compareVersion, __newString } = exports;
    // JS 只需将参数直接透传给 Wasm 即可
    const va = __newString(a);
    const vb = __newString(b);

    return compareVersion(va, vb, digit);
  });
}

export default fooP;

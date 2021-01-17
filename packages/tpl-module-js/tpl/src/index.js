/**
 * @author {{author}}
 * @date {{date}}
 */
'use strict';

/**
 * Used for proxying regular HTTP(S) requests
 * @param {number} a - 参数A
 * @param {number} b - 参数B
 * @returns {number|boolean} ret
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  } else {
    return a > b;
  }
}

export { compare };

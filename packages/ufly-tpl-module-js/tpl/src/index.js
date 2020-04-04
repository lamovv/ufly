/**
 * @author {{author}}
 * @date {{date}}
 */

/**
 * @param {string} a - 参数A 
 * @param {number} b - 参数B 
 * @param {any} args - 其他参数
 * @returns {string|boolean}
 */
function fn(a, b, ...args) {
  console.log('%c Method fn was invoked and executed successfully, args ->', 'color:#0f0', args);
  
  if(b > 1 ){
    return true;
  } else {
    return a;
  }
}

export {
  fn
}
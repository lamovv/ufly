/**
 * @author {{author}}
 * @date {{date}}
 */
'use strict';

export function empty<T>(_var: T): boolean {
  // undefinded、null、0、false、''
  if (!_var) {
    return true;
  }

  // []
  if (_var instanceof Array) {
    return !_var.length;
  }

  // {}
  if (JSON.stringify(_var) == '{}') {
    return true;
  }

  return false;
}

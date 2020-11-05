'use strict';
import 'console-log-h5';
import {
  compareVersion
} from '{{name}}';

document.addEventListener('click', async e => {
  const action = e.target.getAttribute('data-action');

  switch (action) {
    case '{{name}}':
      const a = '1.2.0';
      const b = '1.2.1';
      const ret = await compareVersion(a, b);
      console.log(
        `%c 版本 ${a} 比 ${b} ${ {0: '相等', 1: '大', '-1': '小' }[ret] }`,
        'color:#0f0;'
      );
      break;
    default:
      break;
  }

}, false);
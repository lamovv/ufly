'use strict';
import 'console-log-h5';

import {
  empty
} from '{{name}}';

document.addEventListener('click', e => {
  const action = e.target.getAttribute('data-action');

  let r;
  switch (action) {
    case '{{name}}':
      r = empty([]);
      console.log(`empty [] to equal ${r}`);
      break;
    default:
      break;
  }

}, false);
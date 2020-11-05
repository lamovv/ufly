'use strict';
import 'console-log-h5';

import {
  fn
} from '{{name}}';

document.addEventListener('click', e => {
  const action = e.target.getAttribute('data-action');

  switch (action) {
    case '{{name}}':
      fn('string', 2, 3, 'successed');
      break;
    default:
      break;
  }

}, false);
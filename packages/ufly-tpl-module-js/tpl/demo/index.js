import 'console-log-h5';

import {
  fn
} from '{{name}}';

document.addEventListener('click', e => {
  const action = e.target.getAttribute('data-action');

  switch (action) {
    case '{{name}}':
      fn('successed');
      break;
    default:
      break;
  }

}, false);
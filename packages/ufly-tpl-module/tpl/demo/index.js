import '@ali/console';

import {
  foo
} from '{{name}}';

document.addEventListener('click', e => {
  const action = e.target.getAttribute('data-action');

  switch (action) {
    // eslint-disable-next-line no-case-declarations
    case '{{name}}':
      {{name}}();
      break;
    default:
      break;
  }

}, false);
import './index.scss';
import 'console-log-h5';

import {
  empty
} from '{{scope}}{{name}}';


document.addEventListener('click', e => {
  const action = e.target.getAttribute('data-action');

  let ret;
  switch (action) {
    case 'empty':
      ret = empty<string[]>([]);
      console.log(`empty([]) is ${ret}`);
      break;
    case 'mock':
      fetch('/api/getData.json')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(e => console.error('Error:', e));
      break;
    default:
      break;
    }
  },
  false
);

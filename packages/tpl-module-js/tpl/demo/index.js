import './index.scss';
import 'console-log-h5';

import { compare } from '{{name}}';

document.addEventListener('click', e => {
    const action = e.target.getAttribute('data-action');

    let ret;
    switch (action) {
      case 'compare':
        ret = compare(2, 3);
        console.log(ret);
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

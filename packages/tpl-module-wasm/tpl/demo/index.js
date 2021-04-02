import './index.scss';
import 'console-log-h5';
import {
  compareVersion
} from '{{name}}';

const r = async () => await compareVersion('1.2.0', '1.2.1');
console.log(r);

document.addEventListener('click', async e => {
  const action = e.target.getAttribute('data-action');

  switch (action) {
    case 'compare':
      const a = '1.2.0';
      const b = '1.2.1';
      const ret = await compareVersion(a, b);
      console.log(
        `%c 版本 ${a} 比 ${b} ${ {0: '相等', 1: '大', '-1': '小' }[ret] }`,
        'color:#0f0;'
      );
      break;
    case 'compare-4':
        const a4 = '1.2.3.1';
        const b4 = '1.2.3.0';
        const ret4 = await compareVersion(a4, b4, 4);
        console.log(
          `%c 版本 ${a4} 比 ${b4} ${ {0: '相等', 1: '大', '-1': '小' }[ret4] }`,
          'color:#ff0;'
        );
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

}, false);
/**
 * 计数器组件，同时输出子组件
 */
import useValue from '@uhooks/use-value';
import classnames from 'classnames';
import type { ChangeEventHandler, FC } from 'react';
import styles from './index.module.scss';
import { ICountProps } from './interface';
import Stateless from './stateless';

const Counter: FC<ICountProps> = props => {
  const [val, setVal] = useValue<number>(props);

  const onPlus = () => {
    setVal(val + 1);
  };
  const onMinus = () => {
    setVal(val - 1);
  };
  const onClear = () => {
    setVal(0);
  };
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const v = +e?.target.value;
    setVal(isNaN(v) ? 0 : v);
  };

  return (
    <div className={classnames(styles.counter, props.className)}>
      <div className={styles.title}>{props.title || '数字器'}：</div>
      <div>
        <input value={String(val)} onChange={onChange} />
        <button className={styles.button} onClick={onPlus}>
          +
        </button>
        <button className={styles.button} onClick={onMinus}>
          -
        </button>
        <button className={styles.button} onClick={onClear}>
          清0
        </button>
      </div>
    </div>
  );
};

export default Counter;
export { Stateless };

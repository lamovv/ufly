/**
 * @description 受控组件
 */
import { FC } from 'react';
import styles from './index.module.scss';
import { IControlledProps } from './interface';

const Controlled: FC<IControlledProps> = ({ value, onPlus, onMinus, onChange, onClear }) => {
  return (
    <div>
      <div className={styles.title}>数字器：</div>
      <div>
        <input value={value} onChange={onChange} />
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

export default Controlled;

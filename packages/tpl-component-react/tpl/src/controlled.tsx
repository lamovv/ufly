/**
 * @description 受控组件
 */
import type { ChangeEventHandler } from 'react';
import styles from './index.module.scss';

export type IControlled = {
   value: number;
   onPlus: () => void;
   onMinus: () => void;
   onChange: ChangeEventHandler<HTMLInputElement>;
   onClear: () => void;
 };

function Controlled({ value, onPlus, onMinus, onChange, onClear }: IControlled) {
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
           清空
        </button>
      </div>
    </div>
  );
}

export default Controlled;

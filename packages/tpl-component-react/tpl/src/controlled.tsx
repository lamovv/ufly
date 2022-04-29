/**
 * @description 受控组件
 */
 import type { ChangeEventHandler, FC } from 'react';
 import styles from './index.module.scss';

 export type IControlled = {
    value: number;
    onPlus: () => void;
    onMinus: () => void;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onClear: () => void;
  };

 const Controlled: FC<IControlled> = ({ value, onPlus, onMinus, onChange, onClear }) => {
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

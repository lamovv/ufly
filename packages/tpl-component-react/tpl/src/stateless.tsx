/**
 * 无状态组件 - 纯UI组件
 */
 import type { FC } from 'react';
 import styles from './index.module.scss';

  interface IPure {
    text: string | number;
  }

 const Stateless: FC<IPure> = ({ text }) => {
   return <span className={styles.text}>当前值：{text}</span>;
 }

 export default Stateless;

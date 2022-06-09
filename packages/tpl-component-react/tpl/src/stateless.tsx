/**
 * 无状态组件 - 纯UI组件
 */
import type { FC } from 'react';
import styles from './index.module.scss';
import { IStatelessProps } from './interface';

const Stateless: FC<IStatelessProps> = ({ text }) => {
  return <span className={styles.text}>当前值：{text}</span>;
};

export default Stateless;

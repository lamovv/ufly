/**
 * 无状态组件 - 纯UI组件
 */
import styles from './index.module.scss';

 interface IPure {
   text: string | number;
 }

function Stateless({ text }: IPure) {
  return <span className={styles.text}>当前值：{text}</span>;
}

export default Stateless;

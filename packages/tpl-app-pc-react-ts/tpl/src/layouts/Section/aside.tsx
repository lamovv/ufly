import { ReactNode } from 'react';
import styles from './index.scss';

interface IAside {
  children: ReactNode;
}

function Aside({ children }: IAside) {
  return <div className={styles.saside}>{children}</div>;
}

export default Aside;

import { ReactNode } from 'react';
import styles from './index.scss';

interface IContent {
  children: ReactNode;
}

function Content({ children, ...ext }: IContent) {
  return (
    <div className={styles.scontent} {...ext}>
      {children}
    </div>
  );
}

export default Content;

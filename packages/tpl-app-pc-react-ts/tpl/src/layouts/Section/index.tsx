import { ReactNode } from 'react';
import Aside from './aside';
import Content from './content';
import styles from './index.scss';

interface ISection {
  children: ReactNode;
}

function Section({ children }: ISection) {
  return <div className={styles.msection}>{children}</div>;
}

export { Section, Content, Aside };

export default Section;

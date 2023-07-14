import { ReactNode, memo } from 'react';
import styles from './Collapse.module.scss';

interface CollapseProps {
  isActive: boolean;
  children: ReactNode;
}

function Collapse({ isActive, children }: CollapseProps) {
  return (
    <div className={`${styles.container} ${isActive ? styles.container_open : ''}`}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default memo(Collapse);

import { ReactNode } from 'react';

import styles from './VisuallyHidden.module.css';

interface VisuallyHiddenProps {
  children: ReactNode;
}

function VisuallyHidden({ children, ...delegated }: VisuallyHiddenProps) {
  return (
    <div className={styles.visuallyHidden} {...delegated}>
      {children}
    </div>
  );
}

export default VisuallyHidden;

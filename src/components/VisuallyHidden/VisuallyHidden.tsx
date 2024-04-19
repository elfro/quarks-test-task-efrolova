import * as React from 'react';

import styles from './VisuallyHidden.module.css';

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

function VisuallyHidden({ children, ...delegated }: VisuallyHiddenProps) {
  return (
    <div className={styles.visuallyHidden} {...delegated}>
      {children}
    </div>
  );
}

export default VisuallyHidden;

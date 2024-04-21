import { ReactNode } from 'react';

import styles from './PageLayout.module.css';

interface PageLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}
function PageLayout({ header, footer, children }: PageLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
}

export default PageLayout;

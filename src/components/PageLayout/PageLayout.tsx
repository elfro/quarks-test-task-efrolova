import React from 'react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import styles from './PageLayout.module.css';

interface PageLayoutProps {
  children: React.ReactNode;
}
function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;

import { useRef, useEffect } from 'react';

import { useAppSelector } from '@/app/hooks';
import { Navigate } from 'react-router-dom';

import PageLayout from '@/components/PageLayout/PageLayout';
import MessagesList from '@/components/MessagesList/MessagesList';

import styles from './ThreadPage.module.css';

function ThreadPage() {
  const user = useAppSelector((state) => state.user);
  const { loading } = useAppSelector((state) => state.messages);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && anchorRef.current) {
      anchorRef.current.scrollIntoView();
    }
  }, [loading]);

  if (!user.id) {
    return <Navigate to='/login' />;
  }

  return (
    <PageLayout>
      <div className={styles.wrapper}>
        <MessagesList />
      </div>
      <div className={styles.anchor} ref={anchorRef} />
    </PageLayout>
  );
}

export default ThreadPage;

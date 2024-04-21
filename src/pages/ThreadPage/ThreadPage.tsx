import { useRef, useEffect } from 'react';

import { useAppSelector } from '@/app/hooks';

import PageLayout from '@/components/PageLayout/PageLayout';
import MessagesList from '@/components/MessagesList/MessagesList';
import ThreadHeader from '@/components/ThreadHeader/ThreadHeader';
import SendMessageForm from '@/components/SendMessageForm/SendMessageForm';

import styles from './ThreadPage.module.css';

function ThreadPage() {
  const { loading } = useAppSelector((state) => state.messages);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && anchorRef.current) {
      anchorRef.current.scrollIntoView();
    }
  }, [loading]);

  return (
    <PageLayout header={<ThreadHeader />} footer={<SendMessageForm />}>
      <div className={styles.wrapper}>
        <MessagesList />
      </div>
      <div className={styles.anchor} ref={anchorRef} />
    </PageLayout>
  );
}

export default ThreadPage;

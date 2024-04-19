import { useAppSelector } from '@/app/hooks.ts';
import { Navigate } from 'react-router-dom';

import PageLayout from '@/components/PageLayout/PageLayout.tsx';

import styles from './ThreadPage.module.css';
import MessagesList from '@/components/MessagesList/MessagesList.tsx';

function ThreadPage() {
  const user = useAppSelector((state) => state.user);

  if (!user.id) {
    return <Navigate to='/login' />;
  }

  return (
    <PageLayout>
      <div className={styles.wrapper}>
        <MessagesList />
      </div>
    </PageLayout>
  );
}

export default ThreadPage;

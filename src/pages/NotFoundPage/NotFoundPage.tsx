import { useNavigate } from 'react-router-dom';

import PageLayout from '@/components/PageLayout/PageLayout';
import Heading from '@/components/ui/Heading/Heading';
import Button from '@/components/ui/Button/Button';

import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className={styles.wrapper}>
        <Heading textAlign='center'>Oops...</Heading>
        <p>Page not found</p>
        <Button title='Back to Home' onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </div>
    </PageLayout>
  );
}

export default NotFoundPage;

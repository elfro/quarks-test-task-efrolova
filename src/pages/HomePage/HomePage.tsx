import PageLayout from '@/components/PageLayout/PageLayout.tsx';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <PageLayout>
      <p>
        Welcome to test task
        <br />
        <Link to={'login'}>Login to start using app</Link>
      </p>
    </PageLayout>
  );
}

export default HomePage;

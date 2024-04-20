import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/app/hooks';

import PageLayout from '@/components/PageLayout/PageLayout';
import Login from '@/components/Login/Login';

function LoginPage() {
  const user = useAppSelector((state) => state.user);

  if (user.id) {
    return <Navigate to='/thread' />;
  }

  return (
    <PageLayout>
      <Login />
    </PageLayout>
  );
}

export default LoginPage;

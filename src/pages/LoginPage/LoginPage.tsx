import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/app/hooks';

import PageLayout from '@/components/PageLayout/PageLayout';
import LoginForm from '@/components/LoginForm/LoginForm';

function LoginPage() {
  const user = useAppSelector((state) => state.user);

  if (user.id) {
    return <Navigate to='/thread' />;
  }

  return (
    <PageLayout>
      <LoginForm />
    </PageLayout>
  );
}

export default LoginPage;

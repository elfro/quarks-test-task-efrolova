import PageLayout from '@/components/PageLayout/PageLayout';
import Login from '@/components/Login/Login';
import { useAppSelector } from '@/app/hooks';
import { Navigate } from 'react-router-dom';

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

import PageLayout from '@/components/PageLayout/PageLayout';
import LoginForm from '@/components/LoginForm/LoginForm';
import PublicHeader from '@/components/PublicHeader/PublicHeader';

function LoginPage() {
  return (
    <PageLayout header={<PublicHeader />}>
      <LoginForm />
    </PageLayout>
  );
}

export default LoginPage;

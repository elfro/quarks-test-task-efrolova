import { useAppSelector } from '@/app/hooks';
import SendMessageForm from '@/components/SendMessageForm/SendMessageForm';

import styles from './Footer.module.css';

function Footer() {
  const user = useAppSelector((state) => state.user);
  const url = window.location.href;

  const isThreadsPage = url.endsWith('/thread') && user && user.id !== null;

  return <footer className={styles.footer}>{isThreadsPage && <SendMessageForm />}</footer>;
}

export default Footer;

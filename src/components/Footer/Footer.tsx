import styles from './Footer.module.css';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { addMessage } from '@/features/messages/messages-slice';
import { FormEvent, useState } from 'react';
import VisuallyHidden from '@/components/VisuallyHidden/VisuallyHidden.tsx';
function Footer() {
  const [textMessage, setTextMessage] = useState('');
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const url = window.location.href;

  const isThreadsPage = url.endsWith('/thread') && user && user.id !== null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      addMessage({
        id: crypto.randomUUID(),
        type: 'outbound',
        content: textMessage,
        date: Date.now(),
      })
    );
    setTextMessage('');
  }

  return (
    <footer className={styles.footer}>
      {!isThreadsPage && 'Footer'}
      {isThreadsPage && (
        <form onSubmit={handleSubmit}>
          <label htmlFor='message'>
            <VisuallyHidden>Input field to drop your message</VisuallyHidden>
          </label>
          <input
            id='message'
            placeholder='Drop a few lines...'
            required
            className={styles.input}
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
          />
          <button>Send message</button>
        </form>
      )}
    </footer>
  );
}

export default Footer;

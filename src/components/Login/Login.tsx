import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/app/hooks.ts';

import { createUser } from '@/features/user/user-slice';

import VisuallyHidden from '@/components/VisuallyHidden/VisuallyHidden';

import styles from './Login.module.css';
import { getRandomUserId } from '@/helpers/user.helper.ts';

enum STATUS {
  pending = 'pending',
  idle = 'idle',
}

function Login() {
  const [name, setName] = useState('');
  const [avatarURL, setAvatarURL] = useState('');
  const [status, setStatus] = useState(STATUS.idle);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(STATUS.pending);

    dispatch(createUser({ id: getRandomUserId(), username: name, avatarURL: avatarURL }));

    setStatus(STATUS.idle);
    navigate('/thread');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <label htmlFor='name'>
        <VisuallyHidden>Recipient name</VisuallyHidden>
      </label>
      <input
        id='name'
        placeholder='Recipient name'
        required
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='avatar'>
        <VisuallyHidden>Avatar URL</VisuallyHidden>
      </label>
      <input
        id='avatar'
        placeholder='Avatar URL'
        required
        className={styles.input}
        value={avatarURL}
        onChange={(e) => setAvatarURL(e.target.value)}
      />
      <button>{status === STATUS.pending ? 'Loading...' : 'Start chatting'}</button>
    </form>
  );
}

export default Login;

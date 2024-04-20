import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/app/hooks';
import { createUser } from '@/features/user/user-slice';
import useAutoFocusElement from '@/hooks/useAutoFocusElement';

import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';

import styles from './Login.module.css';

enum STATUS {
  LOADING = 'loading',
  IDLE = 'idle',
}

function Login() {
  const [name, setName] = useState('');
  const [avatarURL, setAvatarURL] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const inputRef = useAutoFocusElement();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(STATUS.LOADING);

    dispatch(createUser({ id: crypto.randomUUID(), username: name, avatarURL: avatarURL }));

    setStatus(STATUS.IDLE);
    navigate('/thread');
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <Input
          id='name'
          type='text'
          size='small'
          placeholder='Recipient name'
          label='Recipient name'
          required={true}
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          id='avatar'
          type='text'
          size='small'
          placeholder='Avatar URL'
          label='Avatar URL'
          required={true}
          value={avatarURL}
          onChange={(e) => setAvatarURL(e.target.value)}
        />
        <Button title='Start chatting'>
          {status === STATUS.LOADING ? 'Loading...' : 'Start chatting'}
        </Button>
      </form>
    </div>
  );
}

export default Login;

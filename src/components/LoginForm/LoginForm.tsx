import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/app/hooks';
import { createUser } from '@/features/user/user-slice';
import useAutoFocusElement from '@/hooks/useAutoFocusElement';

import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import Spinner from '@/components/ui/Spinner/Spinner';

import styles from './LoginForm.module.css';

enum STATUS {
  LOADING = 'loading',
  IDLE = 'idle',
}

function LoginForm() {
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
          minLength={1}
          maxLength={60}
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          id='avatar'
          type='url'
          size='small'
          placeholder='Avatar URL'
          label='Avatar URL'
          required={true}
          value={avatarURL}
          onChange={(e) => setAvatarURL(e.target.value)}
        />
        <Button title='Start chatting'>
          {status === STATUS.LOADING ? <Spinner /> : 'Start chatting'}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;

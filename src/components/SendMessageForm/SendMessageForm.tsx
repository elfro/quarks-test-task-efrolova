import styles from './SendMessageForm.module.css';
import Input from '@/components/ui/input/Input';
import IconButton from '@/components/ui/IconButton/IconButton';
import Icon from '@/components/ui/Icon/Icon';
import { FormEvent, useState } from 'react';
import { addMessage } from '@/features/messages/messages-slice';
import { useAppDispatch } from '@/app/hooks';
import Send from '@/assets/send.svg?react';
import useAutoFocusElement from '@/hooks/useAutoFocusElement.ts';

function SendMessageForm() {
  const [textMessage, setTextMessage] = useState('');
  const dispatch = useAppDispatch();
  const inputRef = useAutoFocusElement([textMessage]);

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
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <Input
        id='message'
        type='text'
        placeholder='Drop a few lines...'
        label='Input field to drop your message'
        required={true}
        value={textMessage}
        ref={inputRef}
        onChange={(e) => setTextMessage(e.target.value)}
      />
      <IconButton title='Send message' icon={<Icon IconEl={Send} />} />
    </form>
  );
}

export default SendMessageForm;

import { format, isThisYear } from 'date-fns';
import { groupMessagesByDate } from '@/helpers/messages.helper';
import { useEffect, useId, useState } from 'react';
import { Message } from '@/types/message.type';

import MessageCard from '@/components/MessageCard/MessageCard';

import styles from './MessagesList.module.css';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchMessages } from '@/features/messages/messages-slice';

function MessagesList() {
  const id = useId();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const selectedMessages = useAppSelector((state) => state.messages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  useEffect(() => {
    setLoading(selectedMessages.loading);
    setError(selectedMessages.error);
    setMessages(selectedMessages.messages);
  }, [selectedMessages]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (messages.length === 0) {
    return <div>No messages here yet...</div>;
  }
  const formatDate = (date: number | string) => {
    const actualDate = new Date(date);
    const formatStr = isThisYear(actualDate) ? 'MMM dd' : 'MMM dd, yyyy';
    return format(actualDate, formatStr);
  };

  const groupedMessages = groupMessagesByDate(messages);

  return Object.entries(groupedMessages).map(([date, messages]) => {
    const groupId = `${id}-${date}`;
    return (
      <div key={groupId} className={styles.groupWrapper}>
        <div className={styles.date}>{formatDate(date)}</div>
        {messages.map((msg) => {
          return <MessageCard key={msg.id} message={msg} type={msg.type} />;
        })}
      </div>
    );
  });
}

export default MessagesList;

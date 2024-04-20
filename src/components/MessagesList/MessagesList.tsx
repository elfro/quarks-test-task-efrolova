import { Fragment, useEffect, useId } from 'react';
import { format, isThisYear } from 'date-fns';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchMessages } from '@/features/messages/messages-slice';

import MessageCard from '@/components/MessageCard/MessageCard';
import Spinner from '@/components/ui/Spinner/Spinner';

import { groupMessagesByDate } from '@/helpers/messages.helper';
import styles from './MessagesList.module.css';

function MessagesList() {
  const id = useId();
  const dispatch = useAppDispatch();
  const { loading, messages, error } = useAppSelector((state) => state.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
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

  const groupedMessages = Object.entries(groupMessagesByDate(messages));

  return groupedMessages.map(([date, messages]) => {
    const groupId = `${id}-${date}`;
    return (
      <Fragment key={groupId}>
        <div className={styles.date}>{formatDate(date)}</div>
        {messages.map((msg) => {
          return <MessageCard key={msg.id} message={msg} type={msg.type} />;
        })}
      </Fragment>
    );
  });
}

export default MessagesList;

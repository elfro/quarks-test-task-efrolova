import styles from '@/pages/ThreadPage/ThreadPage.module.css';
import { useAppSelector } from '@/app/hooks.ts';
import { format, isThisYear } from 'date-fns';
import { groupMessagesByDate } from '@/helpers/messages.helper.ts';
import MessageCard from '@/components/MessageCard/MessageCard.tsx';

function MessagesList() {
  const user = useAppSelector((state) => state.user);
  const messages = useAppSelector((state) => state.messages);

  const formatDate = (date: number | string) => {
    const actualDate = new Date(date);
    const formatStr = isThisYear(actualDate) ? 'MMM dd' : 'MMM dd, yyyy';
    return format(actualDate, formatStr);
  };

  const groupedMessages = groupMessagesByDate(messages.messages);

  return Object.entries(groupedMessages).map(([date, messages]) => {
    return (
      <div key={date} className={styles.groupWrapper}>
        <div className={styles.date}>{formatDate(date)}</div>
        {messages.map((msg) => {
          const type = msg.userId === user.id ? 'outbound' : 'inbound';
          return <MessageCard key={msg.id} message={msg} type={type} />;
        })}
      </div>
    );
  });
}

export default MessagesList;

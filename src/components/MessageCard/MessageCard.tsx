import styles from './MessageCard.module.css';
import { Message } from '@/types/message.type';
import { format } from 'date-fns';
import clsx from 'clsx';

interface MessageCardProps {
  message: Message;
  type: 'inbound' | 'outbound';
}
function MessageCard({ message, type = 'inbound' }: MessageCardProps) {
  const { content, date } = message;
  const formatTime = (date: number | string) => format(new Date(date), 'hh:mm');

  const wrapperClassName = clsx(styles.message, type === 'outbound' && styles.messageOutbound);

  return (
    <div className={wrapperClassName}>
      <p className={styles.messageContent}>{content}</p>
      <span className={styles.messageTime}>{formatTime(date)}</span>
    </div>
  );
}

export default MessageCard;

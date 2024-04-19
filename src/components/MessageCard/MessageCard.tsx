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

  const className = clsx(styles.message, type === 'outbound' && styles.messageOutbound);

  return (
    <div className={className}>
      <span>{content}</span>
      <br />
      <span className={styles.messageTime}>{formatTime(date)}</span>
    </div>
  );
}

export default MessageCard;

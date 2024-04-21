import { format } from 'date-fns';

import { Message } from '@/types/message.type';
export const sortMessagesByDate = (messages: Message[] = [], orderBy: 'ASC' | 'DESC' = 'ASC') => {
  const sortFn =
    orderBy === 'ASC'
      ? (x: Message, y: Message) => x.date - y.date
      : (x: Message, y: Message) => y.date - x.date;
  return [...messages].sort(sortFn);
};

export const sortAndGroupMessagesByDate = (
  messages: Message[] = [],
  orderBy: 'ASC' | 'DESC' = 'ASC'
) => {
  const sortedMessages = sortMessagesByDate(messages, orderBy);
  const groupedMessages: { [key: string]: Message[] } = {};

  sortedMessages.forEach((message: Message) => {
    const groupKey = format(message.date, 'yyyy-MM-dd');

    if (groupedMessages[groupKey]) {
      groupedMessages[groupKey] = [...groupedMessages[groupKey], message];
    } else {
      groupedMessages[groupKey] = [message];
    }
  });

  return groupedMessages;
};

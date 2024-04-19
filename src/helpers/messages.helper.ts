import { Message } from '@/types/message.type.ts';

export const groupMessagesByDate = (messages: Message[] = []) => {
  const sortedMessages = [...messages].sort((x, y) => x.date - y.date);
  const groupedMessages: { [key: string]: Message[] } = {};

  sortedMessages.forEach((message) => {
    const date = new Date(message.date);
    const groupKey = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

    if (groupedMessages[groupKey]) {
      groupedMessages[groupKey] = [...groupedMessages[groupKey], message];
    } else {
      groupedMessages[groupKey] = [message];
    }
  });

  return groupedMessages;
};

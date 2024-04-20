import { format } from 'date-fns';

import { Message } from '@/types/message.type';
import MESSAGES from '@/data/predefined-messages.json';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMessages() {
  await delay(500);

  return MESSAGES as Message[];
}

export const groupMessagesByDate = (messages: Message[] = []) => {
  const sortedMessages = [...messages].sort((x, y) => x.date - y.date);
  const groupedMessages: { [key: string]: Message[] } = {};

  sortedMessages.forEach((message) => {
    const groupKey = format(message.date, 'yyyy-MM-dd');

    if (groupedMessages[groupKey]) {
      groupedMessages[groupKey] = [...groupedMessages[groupKey], message];
    } else {
      groupedMessages[groupKey] = [message];
    }
  });

  return groupedMessages;
};

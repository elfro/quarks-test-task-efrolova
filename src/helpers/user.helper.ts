import messagesJSON from '@/data/mock-messages.json';
import { Chat } from '@/types/chat.type.ts';
import { random } from '@/helpers/random.helper.ts';

export const getRandomUserId = () => {
  const chats: Chat[] = messagesJSON;
  const ids = [...new Set(chats.map(({ members }) => members).flat(1))];
  const index = random(0, ids.length - 1);

  console.log({ ids });
  return ids.at(index) || crypto.randomUUID();
};

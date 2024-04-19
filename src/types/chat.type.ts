import { Message } from '@/types/message.type.ts';

export interface Chat {
  chatId: string;
  members: string[];
  messages: Message[];
}

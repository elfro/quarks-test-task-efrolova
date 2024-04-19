import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '@/types/message.type.ts';
import messagesJSON from '@/data/mock-messages.json';
import { Chat } from '@/types/chat.type.ts';

interface MessagesState {
  chatId: string;
  members: string[];
  messages: Message[];
}

const chats: Chat[] = messagesJSON;

const initialState: MessagesState = chats[0];

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;

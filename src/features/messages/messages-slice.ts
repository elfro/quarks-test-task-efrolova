import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Message } from '@/types/message.type';
import MESSAGES from '@/data/predefined-messages.json';

interface MessagesState {
  loading: boolean;
  messages: Message[];
  error: string | undefined;
}

const initialState: MessagesState = {
  loading: false,
  messages: [],
  error: undefined,
};

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  await delay(1000);

  return MESSAGES as Message[];
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action: PayloadAction<Message[]>) => {
      state.loading = false;
      state.messages = action.payload;
    });
    builder.addCase(fetchMessages.rejected, (state, action) => {
      state.loading = false;
      state.messages = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },
    resetMessages() {
      return { ...initialState };
    },
  },
});

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const { addMessage, resetMessages } = messagesSlice.actions;

export default messagesSlice.reducer;

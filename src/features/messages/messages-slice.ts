import { Message } from '@/types/message.type';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMessages } from '@/helpers/messages.helper';

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
  return await getMessages();
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

export const { addMessage, resetMessages } = messagesSlice.actions;

export default messagesSlice.reducer;

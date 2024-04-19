import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/features/user/user-slice';
import messagesReducer from '@/features/messages/messages-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messagesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

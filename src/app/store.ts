import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '@/features/user/user-slice';
import messagesReducer from '@/features/messages/messages-slice';

const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

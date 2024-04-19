import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/user.type';

interface UserState {
  id: string | null;
  username: string | null;
  avatarURL: string | null;
}

const initialState: UserState = { id: null, username: null, avatarURL: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser(state, action: PayloadAction<User>) {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.avatarURL = action.payload.avatarURL;
    },
    resetUser() {
      return { ...initialState };
    },
  },
});

export const { createUser, resetUser } = userSlice.actions;
export default userSlice.reducer;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLocalStorage, setLocalStorage } from '../../utils/localstorage';

interface AuthState {
  allUsers: any[]; // Change this to a more specific type if possible
  user: any;
}

const initialState: AuthState = {
  allUsers: [],
  user: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    add_user: (state, { payload }: PayloadAction<any>) => {
      state.allUsers.push(payload);
      state.user = payload;
      setLocalStorage('user', state.user);
    },
    user_info: (state, { payload }: PayloadAction<any>) => {
      state.user = payload;
      setLocalStorage('user', state.user);
    },
    sign_out: (state) => {
      state.user = {};
      setLocalStorage('user', state.user);
    },
    get_user: (state) => {
      const user = getLocalStorage<any>('user');
      state.user = user || {};
    },
  },
});

export const { user_info, add_user, sign_out, get_user } = authSlice.actions;

export default authSlice.reducer;

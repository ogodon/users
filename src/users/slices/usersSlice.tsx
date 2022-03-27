import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Moment from 'moment';

import { User, cloneUser } from '../types/user';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as Array<User>
  },
  reducers: {
    load: (state, action: PayloadAction<Array<User>>) => {
      state.users = action.payload
    },
    update: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(user => user.login.uuid === action.payload.login.uuid);
      if(index !== -1) {
        state.users = [
          ...state.users.slice(0, index),
          action.payload,
          ...state.users.slice(index + 1)
        ];
      }
    },
    check: (state, action: PayloadAction<User>) => {
      const uuid = action.payload.login.uuid;
      const index = state.users.findIndex(user => user.login.uuid === uuid);
      if(index !== -1) {
        let user = cloneUser(state.users[index]);
        user.dob.age = Moment().diff(user.dob.date, 'years');
        state.users = [
          ...state.users.slice(0, index),
          user,
          ...state.users.slice(index + 1)
        ];
      }
    }
  }
});

export const { load, update, check } = usersSlice.actions;
export default usersSlice.reducer;
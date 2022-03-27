import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../users/slices/usersSlice';
import usersMiddleware from '../users/middlewares';

const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersMiddleware),
});

export default store;
import { configureStore } from '@reduxjs/toolkit';

import {apiSlice} from '../shared/api';
import {userReducer} from '../entities/user';
import { errorHandleMiddleware } from '../shared/errorHandle';

const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, errorHandleMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

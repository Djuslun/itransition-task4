import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../../app/store';
import { CustomError } from 'shared/errorHandle';

type CustomBaseQueryFn = BaseQueryFn<
  string | FetchArgs,
  unknown,
  CustomError,
  Record<string, unknown>
>;

const baseQuery: CustomBaseQueryFn = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  credentials: 'include',
    mode: 'cors',
  prepareHeaders(headers, { getState }) {
    const { token } = (getState() as RootState).user;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
}) as CustomBaseQueryFn

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: baseQuery,
  tagTypes: ['User'],
  endpoints: () => ({}),
});

export default apiSlice;

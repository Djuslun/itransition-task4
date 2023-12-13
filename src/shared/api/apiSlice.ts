import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { setAccsesToken, logoutUser } from 'entities/user';
import { RootState } from 'app/store';
import { CustomError } from 'shared/errorHandle';
import { AuthResponse } from 'entities/user';

type CustomBaseQueryFn = BaseQueryFn<
  string | FetchArgs,
  AuthResponse,
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

const baseQueryWithReauth: BaseQueryFn<
string | FetchArgs,
AuthResponse,
CustomError,
Record<string, unknown>
> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
  const refreshResult = await baseQuery({
        url: `${process.env.REACT_APP_BASE_URL}/refresh`,
        method: 'GET'
      }, api, extraOptions);

      if (refreshResult.data) {
        console.log(refreshResult.data)
        api.dispatch(setAccsesToken(refreshResult.data.accessToken));

        result = await baseQuery(args, api, extraOptions);
      } else {
          api.dispatch(logoutUser());
      }
  }
  return result;
} 


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  endpoints: () => ({}),
});

export default apiSlice;

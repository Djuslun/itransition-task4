import {apiSlice} from 'shared/api';
import { IUser, IUserLoginRequestBody, IUserRegistrationRequestBody } from '../types/user';
import { AuthResponse } from '../types/authResponse';

interface IChangeUserStatus {
  userIds: string[];
  activeStatus: boolean;
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<AuthResponse, IUserRegistrationRequestBody>({
      query: (newUser: IUserRegistrationRequestBody) => ({
        url: `${process.env.REACT_APP_BASE_URL}/registration`,
        method: "POST",
        body: newUser
      }),
      invalidatesTags: ["User", "Token"],
    }),
    login: builder.mutation<AuthResponse, IUserLoginRequestBody>({
      query: (user: IUserLoginRequestBody) => ({
        url: `${process.env.REACT_APP_BASE_URL}/login`,
        method: "POST",
        body: user
      }),
      invalidatesTags: ["User","Token"],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `${process.env.REACT_APP_BASE_URL}/logout`,
        method: "POST",
      }),
      invalidatesTags: [],
    }),
    refreshToken: builder.query<AuthResponse, string>({
      query: (accessToken: string) => ({
        url: `${process.env.REACT_APP_BASE_URL}/refresh`,
        method: "GET"
      }),
      providesTags: ["Token"],
    }),
    changeActiveStatus: builder.mutation<IUser[], IChangeUserStatus>({
      query: ({userIds, activeStatus}: IChangeUserStatus) => ({
        url: `${process.env.REACT_APP_BASE_URL}/block`,
        method: "PATCH",
        body: {activeStatus, userIds},
      }),
      invalidatesTags: ["User", "Token"],
    }),
    deleteUser: builder.mutation<IUser[], string[]>({
      query: (userIds: string[]) => ({
        url: `${process.env.REACT_APP_BASE_URL}/delete`,
        method: "DELETE",
        body: userIds
      }),
      invalidatesTags: ["User", "Token"],
    }),
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: `${process.env.REACT_APP_BASE_URL}/users`,
        method: "GET",
      }),
      providesTags: ["User"],
    })
  }),
});

export const {
useChangeActiveStatusMutation,
useDeleteUserMutation,
useLogoutMutation,
useLoginMutation,
useGetUsersQuery,
useRegistrationMutation,
useRefreshTokenQuery,
} = userApiSlice;

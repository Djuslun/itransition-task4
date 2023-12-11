import apiSlice from './apiSlice';
import { IUser, IUserLoginRequestBody, IUserRegistrationRequestBody } from './user';
import { AuthResponse } from './authResponse';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<AuthResponse, IUserRegistrationRequestBody>({
      query: (newUser: IUserRegistrationRequestBody) => ({
        url: `${process.env.REACT_APP_BASE_URL}/registration`,
        method: "POST",
        body: newUser
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation<AuthResponse, IUserLoginRequestBody>({
      query: (user: IUserLoginRequestBody) => ({
        url: `${process.env.REACT_APP_BASE_URL}/login`,
        method: "POST",
        body: user
      }),
      invalidatesTags: ["User"],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `${process.env.REACT_APP_BASE_URL}/logout`,
        method: "POST",
      }),
      invalidatesTags: [],
    }),
    changeActiveStatus: builder.mutation<IUser, boolean>({
      query: (activeStatus: boolean) => ({
        url: `${process.env.REACT_APP_BASE_URL}new`,
        method: "PATCH",
        body: {activeStatus},
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation<IUser, string>({
      query: (userId: string) => ({
        url: `${process.env.REACT_APP_BASE_URL}/delete/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
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
} = userApiSlice;

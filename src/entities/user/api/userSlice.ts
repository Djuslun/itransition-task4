import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types/user';

interface UserState {
  token: string;
  user: IUser;
  errorMessage: string;
}

const initialState: UserState = {
  token: localStorage.getItem('accessToken') || '',
  user: {
    id: '',
    email: '',
    name: '',
    isActive: false,
    last_login: ''
  },
  errorMessage: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccsesToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.token = '';
      state.user = initialState.user;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    },
    clearErrorMessage: (state) => {
      state.errorMessage = ''
    }
  },
  extraReducers: (builder) => {
    builder.addDefaultCase(() => {});
  },
});

const { actions, reducer: userReducer } = userSlice;

export default userReducer;

export const { setAccsesToken, setUser, logoutUser, setErrorMessage, clearErrorMessage } = actions;

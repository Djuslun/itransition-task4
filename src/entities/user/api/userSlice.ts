import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types/user';

interface UserState {
  token: string;
  user: IUser | null;
  errorMessage: string;
}

const initialState: UserState = {
  token: localStorage.getItem('accessToken') || '',
  user: null,
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
      state.user = {
        id: '',
        email: '',
        name: '',
        isActive: false,
        last_login: ''
      };
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

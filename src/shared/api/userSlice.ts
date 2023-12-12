import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './user';

interface UserState {
  token: string;
  user: IUser;
}

const initialState: UserState = {
  token: localStorage.getItem('accessToken') || '',
  user: {
    id: '',
    email: '',
    name: '',
    isActive: false,
    last_login: null
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccsesToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserToken: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase(() => {});
  },
});

const { actions, reducer: userReducer } = userSlice;

export default userReducer;

export const { setAccsesToken } = actions;

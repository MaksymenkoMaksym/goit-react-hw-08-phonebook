import { createSlice } from '@reduxjs/toolkit';

import {
  logInUser,
  signUpUser,
  logOutUser,
  refreshUser,
} from './authOperation';
const pendingHandlerAuth = (state, action) => {
  state.isLoading = true;
  state.error = null;
};
const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  user: { name: null, email: null },
  isLoading: false,
  isAuth: false,
  error: null,
  token: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    [signUpUser.pending]: pendingHandlerAuth,
    [signUpUser.rejected]: rejectedHandler,
    [signUpUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
    },
    [logInUser.pending]: pendingHandlerAuth,
    [logInUser.rejected]: rejectedHandler,
    [logInUser.fulfilled](state, action) {
      state.isAuth = true;
      state.isLoading = false;
      state.error = null;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
    },
    [logOutUser.pending]: pendingHandlerAuth,
    [logOutUser.rejected]: rejectedHandler,
    [logOutUser.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.isAuth = false;
      state.isLoading = false;
      state.error = null;
      state.token = null;
    },
    [refreshUser.pending]: pendingHandlerAuth,
    [refreshUser.rejected]: rejectedHandler,
    [refreshUser.fulfilled](state, action) {
      state.isAuth = true;
      state.isLoading = false;
      state.error = null;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    },
  },
});

export const authReducer = authSlice.reducer;

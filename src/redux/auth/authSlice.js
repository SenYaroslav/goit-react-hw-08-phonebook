import { createSlice } from '@reduxjs/toolkit';
import { userSingup, login, logout, authRefresh } from './authOperations';

const initialState = {
  token: null,
  user: {
    name: '',
    email: '',
  },
  isFetchingCurrentUser: false,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [userSingup.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [userSingup.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [userSingup.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [login.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null }; 
      state.isLoading = false;
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authRefresh.pending](state) {
      state.isFetchingCurrentUser = true;
      state.isLoading = true;
      state.error = null;
    },
    [authRefresh.fulfilled](state, action) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
      state.isFetchingCurrentUser = false;
    },
    [authRefresh.rejected](state, action) {
      state.isLoading = false;
      state.isFetchingCurrentUser = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

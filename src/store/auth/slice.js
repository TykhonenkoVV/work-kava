import { userLocale } from 'services/services';
import {
  logIn,
  logOut,
  refreshToken,
  refreshUser,
  register,
  updateAvatar,
  updateUser
} from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
    avatarURL: '',
    avatarURLsmall: '',
    theme: 'dark',
    locale: userLocale()
  },
  locale: userLocale(),
  accessToken: null,
  refreshToken: null,
  isRegistered: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: { message: '', status: '' }
};

const authSlice = createSlice({
  name: 'wk-auth',
  initialState,
  reducers: {
    forcedLogout: state => {
      state.user = {
        name: '',
        email: '',
        avatarURL: '',
        avatarURLsmall: '',
        theme: 'dark',
        local: userLocale()
      };
      state.refreshToken = null;
      state.accessToken = null;
      state.isLoggedIn = false;
      state.error = { message: '', status: '' };
    },
    changeLocale: (state, { payload }) => {
      state.user.locale = payload;
    }
  },
  extraReducers: buider => {
    buider
      .addCase(register.pending, (state, { payload }) => {
        state.isRegistered = false;
        state.error = { message: '', status: '' };
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isRegistered = true;
        state.error = { message: '', status: '' };
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isRegistered = false;
        state.error = payload;
      })
      .addCase(logIn.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
        state.error = { message: '', status: '' };
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.tokens.accessToken;
        state.refreshToken = payload.tokens.refreshToken;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = { message: '', status: '' };
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.user = {
          name: '',
          email: '',
          avatarURL: '',
          avatarURLsmall: '',
          theme: 'dark'
        };
        state.accessToken = null;
        state.refreshToken = null;
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: '',
          email: '',
          avatarURL: '',
          avatarURLsmall: '',
          theme: 'dark'
        };
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.error = { message: '', status: '' };
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = true;
        state.error = { message: '', status: '' };
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = { message: '', status: '' };
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(refreshToken.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = true;
        state.error = { message: '', status: '' };
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
        state.error = { message: '', status: '' };
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isRefreshing = false;
        state.error = { message: '', status: '' };
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload.avatarURL;
        state.user.avatarURLsmall = payload.avatarURLsmall;
        state.error = { message: '', status: '' };
      })
      .addCase(updateAvatar.rejected, (state, { payload }) => {
        state.error = payload;
      });
  }
});
export const { forcedLogout, changeLocale } = authSlice.actions;
export const authReducer = authSlice.reducer;

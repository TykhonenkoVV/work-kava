import { userLocale } from 'services/services';
import {
  logIn,
  logOut,
  refreshToken,
  refreshUser,
  register,
  updateUser
} from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
    avatarURL: ''
  },
  locale: userLocale(),
  accessToken: null,
  refreshToken: null,
  isRegistered: false,
  isUpdated: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: null
};

const authSlice = createSlice({
  name: 'wk-auth',
  initialState,
  reducers: {
    forcedLogout: state => {
      state.user = {
        name: '',
        email: '',
        avatarURL: ''
      };
      state.locale = userLocale();
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    changeLocale: (state, { payload }) => {
      state.locale = payload;
    },
    turnOffIsUpdated: (state, { payload }) => {
      state.isUpdated = payload;
    },
    clearError: (state, { payload }) => {
      state.error = null;
    }
  },
  extraReducers: buider => {
    buider
      .addCase(register.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isRegistered = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isRegistered = false;
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(logIn.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = {
          name: payload.user.name,
          email: payload.user.email,
          avatarURL: payload.user.avatarURL
        };
        state.locale = payload.user.locale;
        state.accessToken = payload.tokens.accessToken;
        state.refreshToken = payload.tokens.refreshToken;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.user = {
          name: '',
          email: '',
          avatarURL: ''
        };
        state.locale = userLocale();
        state.accessToken = null;
        state.refreshToken = null;
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(logOut.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.error = null;
      })

      .addCase(logOut.fulfilled, state => {
        state.isRefreshing = false;
        state.user = {
          name: '',
          email: '',
          avatarURL: ''
        };
        state.locale = userLocale();
        state.accessToken = null;
        state.refreshToken = null;
        state.isRegistered = false;
        state.isUpdated = false;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = {
          name: payload.name,
          email: payload.email,
          avatarURL: payload.avatarURL
        };
        state.locale = payload.locale;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(refreshToken.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.error = null;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        if (payload.name) state.user.name = payload.name;
        if (payload.email) state.user.email = payload.email;
        if (payload.avatarURL) state.user.avatarURL = payload.avatarURL;
        if (payload.locale) state.locale = payload.locale;
        state.isRefreshing = false;
        state.isUpdated = true;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      });
  }
});
export const { forcedLogout, changeLocale, turnOffIsUpdated, clearError } =
  authSlice.actions;
export const authReducer = authSlice.reducer;

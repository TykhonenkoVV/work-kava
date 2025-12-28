import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from 'store/store';
import { BASE_URL } from 'utils/constants';

export const workKavaInnstance = axios.create({
  baseURL: `${BASE_URL}/api`
});

const setAuthHeader = token => {
  workKavaInnstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  workKavaInnstance.defaults.headers.common.Authorization = '';
};

workKavaInnstance.interceptors.response.use(
  responce => responce,
  async error => {
    if (error.response.status === 401 && !error.config._retry) {
      try {
        error.config._retry = true;
        await store.dispatch(refreshToken());
        const newToken = store.getState().auth.accessToken;
        error.config.headers.Authorization = `Bearer ${newToken}`;
        setAuthHeader(newToken);
        return workKavaInnstance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      await workKavaInnstance.post('/auth/signup', credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.post(
        '/auth/signin',
        credentials
      );
      setAuthHeader(data.tokens.accessToken);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshuser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedAccessToken = state.auth.accessToken;

    if (persistedAccessToken === null) {
      return thunkAPI.rejectWithValue({
        message: 'Unable to fetch user',
        status: 404
      });
    }

    try {
      setAuthHeader(persistedAccessToken);
      const { data } = await workKavaInnstance.get('/auth/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedRefreshToken = state.auth.refreshToken;

    if (persistedRefreshToken === null) {
      return thunkAPI.rejectWithValue({
        message: 'Unable to fetch user',
        status: ''
      });
    }

    try {
      setAuthHeader(persistedRefreshToken);
      const { data } = await workKavaInnstance.post('/auth/refresh');

      setAuthHeader(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (avatarFile, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatarURL', avatarFile);

      const { data } = await workKavaInnstance.patch(
        '/users/avatars',
        formData
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, { dispatch, rejectWithValue }) => {
    if (userData.avatar) {
      try {
        await dispatch(updateAvatar(userData.avatar)).unwrap();
      } catch (error) {
        return rejectWithValue({
          message: error.response.data.message,
          status: error.response.status
        });
      }
    }
    try {
      const { data } = await workKavaInnstance.patch('/users', userData);
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await workKavaInnstance.get('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error.response.data.message,
      status: error.response.status
    });
  }
});

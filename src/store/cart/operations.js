import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const addProductToCart = createAsyncThunk(
  'cart/add',
  async (product, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.post('/cart', product);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCart = createAsyncThunk('cart/getAll', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedAccessToken = state.auth.accessToken;

  if (persistedAccessToken === null) {
    return thunkAPI.rejectWithValue({
      message: 'Unable to fetch cart',
      status: 404
    });
  }
  try {
    const { data } = await workKavaInnstance.get('/cart');
    return data.cart;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getHistory = createAsyncThunk(
  'cart/getHistory',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedAccessToken = state.auth.accessToken;

    if (persistedAccessToken === null) {
      return thunkAPI.rejectWithValue({
        message: 'Unable to fetch history',
        status: 404
      });
    }
    try {
      const { data } = await workKavaInnstance.get('/cart/history');
      return data.history;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  'cart/getProduktById',
  async (credentionals, thunkAPI) => {
    try {
      let result = [];
      for (let i = 0; i < credentionals.length; i++) {
        const el = credentionals[i];
        const { data } = await workKavaInnstance.get(`${el.category}/${el.id}`);
        result.push(data);
      }
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProductInCart = createAsyncThunk(
  'cart/update',
  async (credentionals, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.patch(
        `cart/${credentionals.id}`,
        { ...credentionals.data }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProductInCart = createAsyncThunk(
  'cart/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.delete(`cart/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

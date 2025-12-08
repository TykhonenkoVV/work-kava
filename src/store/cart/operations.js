import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const addProductToCart = createAsyncThunk(
  'cart/add',
  async (product, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.post('/carts', product);
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
    const { data } = await workKavaInnstance.get('/carts/cart');
    return data.cart;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

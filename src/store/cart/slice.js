import { createSlice } from '@reduxjs/toolkit';
import { addProductToCart, getCart } from './operations';

const initialState = {
  products: [],
  isLoading: false,
  error: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      state.products = [];
    }
  },
  extraReducers: builder => {
    builder
      .addCase(addProductToCart.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addProductToCart.fulfilled, (state, { payload }) => {
        state.products.push(payload.product);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addProductToCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(getCart.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const { clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

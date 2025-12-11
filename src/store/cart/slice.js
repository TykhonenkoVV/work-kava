import { createSlice } from '@reduxjs/toolkit';
import {
  addProductToCart,
  getCart,
  getProductById,
  updateProductInCart
} from './operations';

const initialState = {
  products: [],
  cart: [],
  isLoading: false,
  error: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearProducts: state => {
      state.products = [];
    },
    clearCart: state => {
      state.cart = [];
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
      })
      .addCase(getProductById.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        let isDuplicate = false;
        state.cart.forEach(el => {
          if (el._id === payload._id) isDuplicate = true;
        });
        if (isDuplicate) return;
        state.cart.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProductById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateProductInCart.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProductInCart.fulfilled, (state, { payload }) => {
        const i = state.products.findIndex(
          option => option._id === payload._id
        );
        state.products.splice(i, 1, payload.updated);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateProductInCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const { clearProducts, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

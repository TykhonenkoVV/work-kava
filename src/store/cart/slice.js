import { createSlice } from '@reduxjs/toolkit';
import {
  addProductToCart,
  deleteProductInCart,
  getCart,
  getHistory,
  getProductById,
  updateProductInCart
} from './operations';

const initialState = {
  products: [],
  cart: [],
  history: {},
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
      .addCase(getHistory.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getHistory.fulfilled, (state, { payload }) => {
        let res = {};
        payload.forEach(el => {
          const receipt = el.receipt;
          if (!res[receipt]) res[receipt] = [];
          res[receipt].push(el);
        });
        state.history = res;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getHistory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getProductById.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.cart = payload;
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
          option => option._id === payload.updated._id
        );
        if (payload.updated.archived) state.products.splice(i, 1);
        else state.products.splice(i, 1, payload.updated);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateProductInCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteProductInCart.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProductInCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const i = state.products.findIndex(
          option => option._id === payload.deleted._id
        );
        state.products.splice(i, 1);
        state.error = null;
      })
      .addCase(deleteProductInCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const { clearProducts, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

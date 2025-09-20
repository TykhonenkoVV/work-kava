import { createSlice } from '@reduxjs/toolkit';
import { getCafeDishes } from './operation';

const initialState = {
  dishes: {
    coffeeClassics: [],
    coffeeWithMilks: [],
    desserts: []
  },
  isLoading: false,
  error: { message: '', status: '' }
};

const cafeSlice = createSlice({
  name: 'cafe',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCafeDishes.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCafeDishes.fulfilled, (state, { payload }) => {
        state.dishes.coffeeClassics = payload.coffee_classic;
        state.dishes.coffeeWithMilks = payload.coffee_with_milk;
        state.dishes.desserts = payload.desserts;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCafeDishes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const cafeReducer = cafeSlice.reducer;

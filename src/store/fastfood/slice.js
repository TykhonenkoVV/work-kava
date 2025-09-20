import { createSlice } from '@reduxjs/toolkit';
import { getFastFoodDishes } from './operations';

const initialState = {
  dishes: {
    burgers: [],
    rolls: [],
    hotDogs: []
  },
  isLoading: false,
  error: { message: '', status: '' }
};

const fastFoodSlice = createSlice({
  name: 'fastfood',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getFastFoodDishes.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFastFoodDishes.fulfilled, (state, { payload }) => {
        state.dishes.burgers = payload.burgers;
        state.dishes.rolls = payload.rolls;
        state.dishes.hotDogs = payload.hot_dogs;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFastFoodDishes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const fastFoodReducer = fastFoodSlice.reducer;

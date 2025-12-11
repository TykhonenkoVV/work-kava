import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const getFastFoodDishes = createAsyncThunk(
  'fastfooddishes/get',
  async (_, thunkAPI) => {
    try {
      const burgersData = await workKavaInnstance.get('burgers');
      const rollsData = await workKavaInnstance.get('rolls');
      const hotDogsData = await workKavaInnstance.get('hot-dogs');
      return {
        burgers: burgersData.data.burgers,
        hot_dogs: hotDogsData.data.hot_dogs,
        rolls: rollsData.data.rolls
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

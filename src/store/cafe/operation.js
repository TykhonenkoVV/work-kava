import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const getCafeDishes = createAsyncThunk(
  'cafedishes/get',
  async (_, thunkAPI) => {
    try {
      const coffeeClasscData = await workKavaInnstance.get('coffeeclassics');
      const coffeeWithmilkData = await workKavaInnstance.get('coffeewithmilks');
      const dessertsData = await workKavaInnstance.get('desserts');
      return {
        coffee_classic: coffeeClasscData.data.coffee_classic,
        coffee_with_milk: coffeeWithmilkData.data.coffee_with_milk,
        desserts: dessertsData.data.desserts
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

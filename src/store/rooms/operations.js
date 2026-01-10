import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const getRooms = createAsyncThunk('rooms/get', async (_, thunkAPI) => {
  try {
    const { data } = await workKavaInnstance.get('rooms');
    return data.rooms;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

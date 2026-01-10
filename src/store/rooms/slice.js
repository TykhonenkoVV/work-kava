import { createSlice } from '@reduxjs/toolkit';
import { getRooms } from './operations';

const initialState = {
  rooms: [],
  isLoading: false,
  error: null
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getRooms.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRooms.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.rooms = payload;
        state.error = null;
      })
      .addCase(getRooms.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const roomsReducer = roomsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signup, signIn } from '../services/request';
import { SET_READING, SET_READINGS } from '../actions/types'

const initialState = {
  reading: {},
  readings: []
};

export const getReading = createAsyncThunk(
  SET_READING,
  async (formData) => {
    const response = await signup(formData);
    return response;
  }
);

export const getReadings = createAsyncThunk(
  SET_READINGS,
  async (formData) => {
    const response = await signIn(formData);
    return response;
  }
);

export const measurementSlice = createSlice({
  name: 'measurements',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getReading.fulfilled, (state, { payload }) => {
        state.reading = payload;
      })
      .addCase(getReadings.fulfilled, (state, { payload }) => {
        state.readings = payload;
      });
  },
  
});
export const selectReading = (state) => state.reading;
export const selectReadings = (state) => state.readings;

export default measurementSlice.reducer;

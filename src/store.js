import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import userReducer from './reducers/userSlice';
import measurementReducer from './reducers/readingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    measurement: measurementReducer
  },
});

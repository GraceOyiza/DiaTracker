import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signup } from '../services/request';
import { REGISTER_USER } from '../actions/types'

const initialState = {};

export const incrementAsync = createAsyncThunk(
  REGISTER_USER,
  async (formData) => {
    const response = await signup(formData);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // reducers: {
  //   loginSuccess: (state) => {
  //     state.value += 1;
  //   },
  //   decrement: (state) => {
  //     state.value -= 1;
  //   },
  //   // Use the PayloadAction type to declare the contents of `action.payload`
  //   incrementByAmount: (state, action) => {
  //     state.value += action.payload;
  //   },
  // }
});

// export const { increment, decrement, incrementByAmount } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectUser(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default userSlice.reducer;

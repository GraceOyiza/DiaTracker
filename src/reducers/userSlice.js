import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signup, signIn, logOut } from '../services/request';
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../actions/types'

const initialState = {
  user: {}
};

export const registerUser = createAsyncThunk(
  REGISTER_USER,
  async (formData) => {
    const response = await signup(formData);
    return response;
  }
);

export const login = createAsyncThunk(
  LOGIN_USER,
  async (formData) => {
    const response = await signIn(formData);
    return response;
  }
);

export const logout = createAsyncThunk(
  LOGOUT_USER,
  async () => {
    await logOut();
    return {};
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
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = payload;
      });
  },
  
});

// export const { increment, decrement, incrementByAmount } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectUser(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default userSlice.reducer;

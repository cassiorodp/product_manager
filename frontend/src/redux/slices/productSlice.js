/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  page: 0,
  formState: false,
  userAction: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page += action.payload;
    },
    changeFormState: (state, action) => {
      state.formState = action.payload;
    },
    changeUserAction: (state, action) => {
      state.userAction = action.payload;
    },
  },
});

export const { changePage, changeFormState, changeUserAction } = productSlice.actions;

export default productSlice.reducer;

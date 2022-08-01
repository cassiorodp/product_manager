/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  deleteProduct,
  getProductsPerPage,
  postProduct,
  updateProduct,
} from '../async_actions/productActions';

const initialState = {
  products: [],
  page: 1,
  sortParam: 'fabDate',
  formState: false,
  userAction: '',
  totalCount: 0,
  lastPage: 0,
  limit: 10,
  loadingProducts: false,
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
    changeSortParam: (state, action) => {
      state.sortParam = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsPerPage.fulfilled, (state, action) => {
      const { data, totalCount } = action.payload;
      state.products = data;
      state.totalCount = totalCount;
      state.lastPage = Math.ceil(totalCount / state.limit);
    });
    builder.addCase(getProductsPerPage.pending, (state) => {
      state.loadingProducts = true;
    });
    builder.addCase(getProductsPerPage.rejected, (state) => {
      state.loadingProducts = false;
    });
    builder.addCase(postProduct.fulfilled, (state) => {
      state.loadingProducts = false;
    });
    builder.addCase(postProduct.pending, (state) => {
      state.loadingProducts = true;
    });
    builder.addCase(postProduct.rejected, (state) => {
      state.loadingProducts = false;
    });
    builder.addCase(deleteProduct.fulfilled, (state) => {
      state.loadingProducts = false;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loadingProducts = true;
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.loadingProducts = false;
    });
    builder.addCase(updateProduct.fulfilled, (state) => {
      state.loadingProducts = false;
    });
    builder.addCase(updateProduct.pending, (state) => {
      state.loadingProducts = true;
    });
    builder.addCase(updateProduct.rejected, (state) => {
      state.loadingProducts = false;
    });
  },
});

export const { changePage, changeFormState, changeUserAction } = productSlice.actions;

export default productSlice.reducer;
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const getProductsPerPage = createAsyncThunk(
  'product/getProductsPerPage',
  async (userParams, { rejectWithValue }) => {
    try {
      const { page = 1, sortParam = 'fabDate' } = userParams;
      const data = await api.getProducts(page, sortParam);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const postProduct = createAsyncThunk(
  'product/postProduct',
  async (productJson, { rejectWithValue, dispatch, getState }) => {
    try {
      const data = await api.postProduct(productJson);
      const { page, sortParam } = getState().product;
      await dispatch(getProductsPerPage({ page, sortParam }));
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (productJson, { rejectWithValue, dispatch, getState }) => {
    try {
      const { id, ...productAttrs } = productJson;
      const data = await api.updateProduct(id, productAttrs);
      const { page, sortParam } = getState().product;
      await dispatch(getProductsPerPage({ page, sortParam }));
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (productId, { rejectWithValue, dispatch, getState }) => {
    try {
      const data = await api.deleteProduct(productId);
      const { page, sortParam } = getState().product;
      await dispatch(getProductsPerPage({ page, sortParam }));
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

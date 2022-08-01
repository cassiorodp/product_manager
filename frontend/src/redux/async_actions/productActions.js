import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import {
  changeOrderParam,
  changePage,
  changeSortParam,
} from '../slices/productSlice';

export const getProductsPerPage = createAsyncThunk(
  'product/getProductsPerPage',
  async (userParams, { rejectWithValue }) => {
    try {
      const {
        page = 1,
        sortParam = 'fabDate',
        orderParam = 'asc',
      } = userParams;
      const data = await api.getProducts(page, sortParam, orderParam);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const changePageAndUpdate = createAsyncThunk(
  'product/changePageAndUpdate',
  async (newPage, { dispatch, getState }) => {
    dispatch(changePage(newPage));
    const { page, sortParam, orderParam } = getState().product;
    await dispatch(getProductsPerPage({ page, sortParam, orderParam }));
  },
);

export const changeSortParamAndUpdate = createAsyncThunk(
  'product/changeSortParamAndUpdate',
  async (newOrderParam, { dispatch, getState }) => {
    dispatch(changeSortParam(newOrderParam));
    const { page, sortParam, orderParam } = getState().product;
    await dispatch(getProductsPerPage({ page, sortParam, orderParam }));
  },
);

export const changeOrderParamAndUpdate = createAsyncThunk(
  'product/changeOrderParamAndUpdate',
  async (newOrderParam, { dispatch, getState }) => {
    dispatch(changeOrderParam(newOrderParam));
    const { page, sortParam, orderParam } = getState().product;
    await dispatch(getProductsPerPage({ page, sortParam, orderParam }));
  },
);

export const postProduct = createAsyncThunk(
  'product/postProduct',
  async (productJson, { rejectWithValue, dispatch, getState }) => {
    try {
      const data = await api.postProduct(productJson);
      const { page, sortParam, orderParam } = getState().product;
      await dispatch(getProductsPerPage({ page, sortParam, orderParam }));
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
      const { page, sortParam, orderParam } = getState().product;
      await dispatch(getProductsPerPage({ page, sortParam, orderParam }));
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
      const { page, sortParam, orderParam } = getState().product;
      await dispatch(getProductsPerPage({ page, sortParam, orderParam }));
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

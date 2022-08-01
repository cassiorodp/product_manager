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

export default getProductsPerPage;

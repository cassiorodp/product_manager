import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const postLogin = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, data);
    return response.data.accessToken;
  } catch (error) {
    console.log(error);
    throw new Error('not valid login');
  }
};

const getProducts = async (page, sortParam, orderParam) => {
  try {
    const accessToken = (localStorage.getItem('accessToken'));
    const response = await axios.get(
      `${BASE_URL}/products?_page=${page}&_sort=${sortParam}&_order=${orderParam}`,
      { headers: { authorization: accessToken } },
    );
    return {
      data: response.data,
      totalCount: response.headers['x-total-count'],
    };
  } catch (error) {
    console.log(error);
    throw new Error('getProducts has failed');
  }
};

const postProduct = async (productJson) => {
  try {
    const accessToken = (localStorage.getItem('accessToken'));
    const response = await axios.post(`${BASE_URL}/products`, productJson, {
      headers: { authorization: accessToken },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('postProduct has failed');
  }
};

const updateProduct = async (productId, productAttrs) => {
  try {
    const accessToken = (localStorage.getItem('accessToken'));
    const response = await axios.put(`${BASE_URL}/products/${productId}`, productAttrs, {
      headers: { authorization: accessToken },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('updateProduct has failed');
  }
};

const deleteProduct = async (productId) => {
  try {
    const accessToken = (localStorage.getItem('accessToken'));
    const response = await axios.delete(`${BASE_URL}/products/${productId}`, {
      headers: { authorization: accessToken },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('deleteProduct has failed');
  }
};

export default {
  postLogin,
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
};

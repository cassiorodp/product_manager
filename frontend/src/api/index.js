import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const postLogin = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, data);
    return response.data.accessToken;
  } catch (error) {
    return null;
  }
};

const getProducts = async (page = 1, sortParam = 'fabDate') => {
  try {
    const response = await axios.get(`${BASE_URL}/products?_page=${page}&_sort=${sortParam}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

export default {
  postLogin,
  getProducts,
};

import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const postLogin = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, data);
    return response.data.accessToken;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getProducts = async (page, sortParam) => {
  try {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const response = await axios.get(
      `${BASE_URL}/products?_page=${page}&_sort=${sortParam}`,
      { headers: { authorization: accessToken } },
    );
    return {
      data: response.data,
      totalCount: response.headers['x-total-count'],
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const postProduct = async (productJson) => {
  try {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const response = await axios.post(`${BASE_URL}/products`, productJson, {
      headers: { authorization: accessToken },
    });
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default {
  postLogin,
  getProducts,
  postProduct,
};

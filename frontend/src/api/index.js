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

export default {
  postLogin,
};

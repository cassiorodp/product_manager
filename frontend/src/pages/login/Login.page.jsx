import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import storeSvg from '../../assets/store.svg';
import Form from '../../components/form/form.component';
import LoginContainer from './login.styles';
import api from '../../api';

export default function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const onSubmit = async (data) => {
    const accessToken = await api.postLogin(data);
    if (!accessToken) setLoginError(true);
    else {
      localStorage.setItem('accessToken', accessToken);
      navigate('/products');
    }
  };
  return (
    <LoginContainer>
      <img src={storeSvg} alt="store" />
      <h1>General Store</h1>
      <Form onSubmit={onSubmit} loginError={loginError} />
    </LoginContainer>
  );
}

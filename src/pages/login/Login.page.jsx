import React from 'react';
import storeSvg from '../../assets/store.svg';
import Form from '../../components/form.component';
import LoginContainer from './login.styles';

export default function Login() {
  const onSubmit = (data) => console.log(data);
  return (
    <LoginContainer>
      <img src={storeSvg} alt="store" />
      <h1>General Store</h1>
      <Form onSubmit={onSubmit} />
    </LoginContainer>
  );
}

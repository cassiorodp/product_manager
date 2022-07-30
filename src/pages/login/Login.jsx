import React from 'react';
import storeSvg from '../../assets/store.svg';
import {
  Form, LoginContainer, LoginInput, LoginLabel,
} from './login.styles';

export default function Login() {
  return (
    <LoginContainer>
      <img src={storeSvg} alt="store" />
      <h1>General Store</h1>
      <Form>
        <LoginLabel htmlFor="email">
          Email
          <LoginInput type="email" id="email" />
        </LoginLabel>
        <LoginLabel htmlFor="password">
          Password
          <LoginInput type="password" id="password" />
        </LoginLabel>
        <button type="submit">Login</button>
      </Form>
    </LoginContainer>
  );
}

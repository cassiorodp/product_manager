import React from 'react';
import { useForm } from 'react-hook-form';
import {
  LoginLabel,
  FormContainer,
  LoginInput,
  ErrorFeedBack,
} from './form.component.style';

export default function Form({ onSubmit, loginError }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <LoginLabel htmlFor="email">
        Email
        <LoginInput
          {...register('email', {
            required: 'email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
          type="email"
          id="email"
        />
        <ErrorFeedBack>
          {errors.email?.message || <span>&nbsp;</span>}
        </ErrorFeedBack>
      </LoginLabel>
      <LoginLabel htmlFor="password">
        Password
        <LoginInput
          {...register('password', { required: 'password is required' })}
          type="password"
          id="password"
        />
        <ErrorFeedBack>
          {errors.password?.message || <span>&nbsp;</span>}
        </ErrorFeedBack>
        <ErrorFeedBack>
          {loginError ? (
            'email and/or password is invalid'
          ) : (
            <span>&nbsp;</span>
          )}
        </ErrorFeedBack>
      </LoginLabel>
      <button type="submit">Login</button>
    </FormContainer>
  );
}

import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginLabel, FormContainer, LoginInput } from './form.component.style';

export default function Form({ onSubmit }) {
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
        <p>{errors.email?.message || <span>&nbsp;</span>}</p>
      </LoginLabel>
      <LoginLabel htmlFor="password">
        Password
        <LoginInput
          {...register('password', { required: 'password is required' })}
          type="password"
          id="password"
        />
        <p>{errors.password?.message || <span>&nbsp;</span>}</p>
      </LoginLabel>
      <span>&nbsp;</span>
      <button type="submit">Login</button>
    </FormContainer>
  );
}

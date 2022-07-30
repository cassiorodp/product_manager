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
      <LoginLabel htmlFor="email" error={errors.email}>
        Email
        <LoginInput
          {...register('email', { required: true })}
          type="email"
          id="email"
        />
        <p>email is required</p>
      </LoginLabel>
      <LoginLabel htmlFor="password" error={errors.password}>
        Password
        <LoginInput
          {...register('password', { required: true })}
          type="password"
          id="password"
        />
        <p>password is required</p>
      </LoginLabel>
      <button type="submit">Login</button>
    </FormContainer>
  );
}

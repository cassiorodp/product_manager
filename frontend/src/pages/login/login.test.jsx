import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import Login from './Login.page';
import api from '../../api';

describe('Login page', () => {
  it('should render all components', () => {
    render(<Login />);

    const loginImage = screen.getByRole('img');
    const loginHeading = screen.getByRole('heading', {
      name: /general store/i,
      level: 1,
    });
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(loginHeading).toBeInTheDocument();
    expect(loginImage).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should set an error message when login fails', async () => {
    const { user } = render(<Login />);
    const apiSpy = jest.spyOn(api, 'postLogin').mockResolvedValue(false);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await user.type(emailInput, 'test@mail.com');
    await user.type(passwordInput, '123456');

    const submitButton = screen.getByText(/login/i);

    await user.click(submitButton);
    expect(apiSpy).toHaveBeenCalledWith({
      email: 'test@mail.com',
      password: '123456',
    });

    const loginError = screen.getByText('email and/or password is invalid');
    expect(loginError).toBeInTheDocument();
  });
});

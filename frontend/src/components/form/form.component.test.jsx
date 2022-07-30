import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import Form from './form.component';

describe('Form component', () => {
  it('should have working inputs', async () => {
    const { user } = render(<Form />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await user.type(emailInput, 'user@mail.com');
    await user.type(passwordInput, 'secretpassword');

    expect(emailInput).toHaveValue('user@mail.com');
    expect(passwordInput).toHaveValue('secretpassword');
  });
  it('should render errors and not call submit when passed invalid data', async () => {
    const mockSubmit = jest.fn();
    const { user } = render(<Form onSubmit={mockSubmit} />);
    const submitButton = screen.getByText(/login/i);

    await user.click(submitButton);

    const passwordError = screen.getByText(/password is required/i);
    const emailError = screen.getByText(/email is required/i);

    expect(passwordError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it('should render a login error when its true', () => {
    render(<Form loginError />);

    const loginErrorMessage = screen.getByText(
      'email and/or password is invalid',
    );
    expect(loginErrorMessage).toBeInTheDocument();
  });
});

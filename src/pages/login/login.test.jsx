import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import Login from './Login';

describe('Login page', () => {
  it('should render all components', () => {
    render(<Login />);

    const loginImage = screen.getByRole('img');
    const loginHeading = screen.getByRole('heading', { name: /general store/i, level: 1 });
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(loginHeading).toBeInTheDocument();
    expect(loginImage).toBeInTheDocument();
  });
});

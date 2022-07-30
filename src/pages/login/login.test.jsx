import { render, screen } from '@testing-library/react';
import React from 'react';
import Login from './Login';

describe('Login page', () => {
  it('should render all components', () => {
    render(<Login />);

    const loginHeading = screen.getByRole('heading', { name: /general store/i, level: 1 });
    expect(loginHeading).toBeInTheDocument();
  });
});

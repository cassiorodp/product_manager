import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import Login from './Login.page';
import api from '../../api';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Login page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
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
    const apiSpy = jest.spyOn(api, 'postLogin').mockImplementation(() => { throw new Error(); });
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

  it('should go to main page when login succeds', async () => {
    const { user } = render(<Login />);
    const apiSpy = jest.spyOn(api, 'postLogin').mockResolvedValue('fakeToken');
    const localStorageSpy = jest.spyOn(Storage.prototype, 'setItem');

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await user.type(emailInput, 'right@mail.com');
    await user.type(passwordInput, 'rightpassword');

    const submitButton = screen.getByText(/login/i);

    await user.click(submitButton);
    expect(apiSpy).toHaveBeenCalledWith({
      email: 'right@mail.com',
      password: 'rightpassword',
    });
    expect(localStorageSpy).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/products');
  });
});

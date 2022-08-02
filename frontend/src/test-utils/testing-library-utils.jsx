import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import theme from '../theme';
import productReducer from '../redux/slices/productSlice';

const render = (
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { product: productReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) => {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </MemoryRouter>
      </Provider>
    );
  }
  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    store,
  };
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };

import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from '../theme';

const render = (ui, options) => {
  function Wrapper({ children }) {
    return (
      <Router>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Router>
    );
  }
  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: Wrapper, options }),
  };
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };

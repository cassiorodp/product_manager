import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from '../theme';

function Wrapper({ children }) {
  <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const renderWithContext = (ui, options) => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };

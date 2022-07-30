import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Login from './pages/login/Login.page';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </div>
  );
}

export default App;

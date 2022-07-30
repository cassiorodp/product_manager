import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Login from './pages/login/Login.page';
import theme from './theme';
import Main from './pages/Main/Main.page';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Main />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;

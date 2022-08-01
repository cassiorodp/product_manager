import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/login/Login.page';
import theme from './theme';
import Main from './pages/Main/Main.page';
import store from './redux/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Main />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;

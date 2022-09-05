/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
);

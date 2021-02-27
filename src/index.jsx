import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from 'easy-peasy'
import store from './store/store'

ReactDOM.render(
  <StoreProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById('root')
);

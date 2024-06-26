import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { logout } from './store/slices/AuthSlice';

const { dispatch } = store; // direct access to redux store.
axios.interceptors.request.use(
  (request) => {
    request.headers['Authorization'] = `Bearer ${store?.getState()?.auth?.userData?.token}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    if (status === 403) {
      dispatch(logout());
    }
    return Promise.reject(error);
  },
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

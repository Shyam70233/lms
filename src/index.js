import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { Provider } from 'react-redux';
import  { createStore } from 'redux';
import reducer from './reducer';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(reducer)}>
      <App />
  </Provider>
);

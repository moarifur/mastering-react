import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const path = document.getElementById('root')
const root = ReactDOM.createRoot(path);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
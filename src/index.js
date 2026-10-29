import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Mount the React application into the root element from the HTML page.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode helps surface common issues during development.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter'
import './index.css'
import QueryProvider from './Providers/Query';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  </React.StrictMode>
);

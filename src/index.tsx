import React from 'react';
import ReactDOM from 'react-dom/client';
import { mockCards } from './mocks';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cards={mockCards}></App>
  </React.StrictMode>
);

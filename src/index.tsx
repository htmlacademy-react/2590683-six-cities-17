import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { mockCards } from './mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cards={mockCards}></App>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import movies from './services/movieData.ts';
import { BrowserRouter } from 'react-router-dom';
import '../index.css';

localStorage.setItem('movies', JSON.stringify(movies));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

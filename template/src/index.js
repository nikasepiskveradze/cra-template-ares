import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/app/App';
import { BrowserRouter } from 'react-router-dom';
import './translations/i18n';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

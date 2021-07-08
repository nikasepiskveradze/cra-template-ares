import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/app/App';
import { BrowserRouter } from 'react-router-dom';
import './translation/i18n';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

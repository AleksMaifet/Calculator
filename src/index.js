import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/app';
import { ErrorBoundary } from '@/components';
import GlobalStyles from '@/globalStyles';

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
      <GlobalStyles />
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);

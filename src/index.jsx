import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/components/App';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import GlobalStyles from '@/globalStyles';
import { store } from '@/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      <GlobalStyles />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

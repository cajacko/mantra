import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import App from 'components/App/App';

let preloadedState = {};

if (typeof window !== 'undefined') {
  // eslint-disable-next-line
  preloadedState = window.__PRELOADED_STATE__;
  // eslint-disable-next-line
  delete window.__PRELOADED_STATE__;
}

const store = configureStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

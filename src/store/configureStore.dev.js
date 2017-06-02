/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from 'reducers/index';

let composeEnhancers = compose;

if (typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export default function configureStore(preloadedState: {}) {
  return createStore(
    reducers,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        logger,
      ),
    ),
  );
}

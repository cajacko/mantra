import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from 'reducers/index';

export default (preloadedState: {}) => createStore(
  reducers,
  preloadedState,
  compose(
    applyMiddleware(
      thunkMiddleware,
      logger,
    ),
  ),
);

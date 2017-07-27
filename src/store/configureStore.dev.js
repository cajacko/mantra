import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import reducers from 'reducers/index';

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(
      thunkMiddleware,
      logger,
    ),
    autoRehydrate(),
  ),
);

export default store;

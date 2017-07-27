import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import reducers from 'reducers/index';

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(
      thunkMiddleware,
    ),
    autoRehydrate(),
  ),
);

export default store;

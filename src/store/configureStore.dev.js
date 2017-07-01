import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
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

persistStore(store, { storage: AsyncStorage });

export default store;

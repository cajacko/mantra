import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import isDev from 'helpers/isDev';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from 'store/reducers';

let store;

/**
 * Log the redux actions to the console
 *
 * @return {Function} Redux Middleware
 */
function loggerMiddleware() {
  return next => (action) => {
    // eslint-disable-next-line no-console
    console.log(`REDUX ACTION: ${action.type}`);

    next(action);

    // const state = store.getState();
    // console.log(JSON.stringify(state, null, 2));
  };
}

// Need eslint disable for when we enable logging the state in the logger
// middleware
// eslint-disable-next-line prefer-const
store = createStore(
  reducers,
  undefined,
  compose(
    isDev()
      ? applyMiddleware(loggerMiddleware, thunkMiddleware)
      : applyMiddleware(thunkMiddleware),
    autoRehydrate()
  )
);

persistStore(store, {
  storage: AsyncStorage,
  blacklist: [
    'syncLoading',
    'offlineItemsSyncing',
    'lastAction',
    'suggestions',
    'acceptableRequests',
    'version',
  ],
});

const getStore = () => store;

export default getStore();

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import reducers from 'reducers/index';

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

    const state = store.getState();

    // eslint-disable-next-line no-console
    // console.log(JSON.stringify(state, null, 2));
  };
}

store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(thunkMiddleware, loggerMiddleware), autoRehydrate())
);

const getStore = () => store;

export default getStore();

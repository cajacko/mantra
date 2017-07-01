import React from 'react';
import { Provider } from 'react-redux';
import Views from 'containers/Views/Views';
import configureStore from 'store/configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Views />
  </Provider>
);

export default Root;

import React from 'react';
import { Provider } from 'react-redux';
import PostActions from 'containers/PostActions/PostActions';
import configureStore from 'store/configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <PostActions />
  </Provider>
);

export default Root;

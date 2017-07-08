import React from 'react';
import { Provider } from 'react-redux';
import PostActions from 'containers/PostActions/PostActions';
import getStore from 'store/getStore';
import cron from 'views/workers/notifications';

cron();

const Root = () => (
  <Provider store={getStore()}>
    <PostActions />
  </Provider>
);

export default Root;

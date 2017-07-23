import React from 'react';
import { Provider } from 'react-redux';
import PostActions from 'containers/PostActions/PostActions';
import getStore from 'store/getStore';
import cron from 'views/workers/notifications';
import Cache from 'containers/Cache/Cache';

cron();

const Root = () => (
  <Cache>
    <Provider store={getStore()}>
      <PostActions />
    </Provider>
  </Cache>
);

export default Root;

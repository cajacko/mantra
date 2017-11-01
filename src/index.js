import React from 'react';
import { Provider } from 'react-redux';
import Views from 'containers/Views/Views';
import getStore from 'store/getStore';
import cron from 'views/workers/notifications';
import Cache from 'containers/Cache/Cache';
import sync from 'views/workers/sync';
import permissions from 'views/workers/permissions';

cron();
sync();
permissions();

const Root = () => (
  <Cache>
    <Provider store={getStore()}>
      <Views />
    </Provider>
  </Cache>
);

export default Root;

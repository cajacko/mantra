import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import Views from 'containers/Views/Views';
import store from 'store';
import cron from 'views/workers/notifications';
import Cache from 'components/Cache';
import sync from 'views/workers/sync';
import permissions from 'views/workers/permissions';

cron();
sync();
permissions();

const App = () => (
  <Cache>
    <Provider store={store}>
      <Root>
        <Views />
      </Root>
    </Provider>
  </Cache>
);

export default App;

import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import productionStore from 'store/configureStore.prod';
import developmentStore from 'store/configureStore.dev';
import { production } from 'root/env.json';

let store;

if (production) {
  store = productionStore;
} else {
  store = developmentStore;
}

persistStore(store, {
  storage: AsyncStorage,
  blacklist: [
    'syncLoading',
    'offlineItemsSyncing',
    'lastAction',
  ],
});

export default function () {
  return store;
}

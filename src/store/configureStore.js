import productionStore from 'store/configureStore.prod';
import developmentStore from 'store/configureStore.dev';
import { production } from 'root/env.json';

let store;

if (production) {
  store = productionStore;
} else {
  store = developmentStore;
}

export default function () {
  return store;
}

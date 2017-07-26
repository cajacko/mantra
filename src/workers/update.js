import getStore from 'store/getStore';
import config from 'root/package.json';
import updateVersion from 'actions/updateVersion';

const store = getStore();

store.subscribe(() => {
  const { lastAction, version } = store.getState();

  switch (lastAction) {
    case 'persist/REHYDRATE':
      if (config.version !== version) {
        store.dispatch(updateVersion());
      }

      break;

    default:
      break;
  }
});

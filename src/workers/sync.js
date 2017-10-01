import sync from 'actions/sync';
import getStore from 'store/getStore';

const store = getStore();

let hydrated = false;
let myjsonIdExists = false;

function syncIfCan() {
  if (hydrated && myjsonIdExists) {
    store.dispatch(sync());
  }
}

store.subscribe(() => {
  const { lastAction, myjsonId } = store.getState();

  if (myjsonId) {
    myjsonIdExists = true;
  } else {
    myjsonIdExists = false;
  }

  switch (lastAction) {
    case 'SAVE_MANTRA':
    case 'DELETE_MANTRA':
      syncIfCan();
      break;

    case 'persist/REHYDRATE':
      hydrated = true;
      break;

    default:
      break;
  }
});

export default function () {
  setInterval(() => {
    if (hydrated && myjsonIdExists) {
      syncIfCan();
    }
  }, 10000);
}

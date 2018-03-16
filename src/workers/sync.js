import sync from 'actions/sync';
import store from 'store';

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
  }, 30000);
}

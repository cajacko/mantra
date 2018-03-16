import { setPermissionsIfChanged } from 'actions/permissions';
import store from 'store';

let hydrated = false;
let myjsonIdExists = false;

store.subscribe(() => {
  const { lastAction, myjsonId } = store.getState();

  if (myjsonId) {
    myjsonIdExists = true;
  }

  switch (lastAction) {
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
      store.dispatch(setPermissionsIfChanged());
    }
  }, 3000);
}

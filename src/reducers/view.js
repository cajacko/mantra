import views from 'constants/views';

const defaultState = 'DisplayView';

export default (state = null, { type, payload }) => {
  switch (type) {
    case 'persist/REHYDRATE':
    case 'LOGOUT':
      return defaultState;

    case 'SWITCH_VIEW': {
      let validView = false;

      views.forEach((view) => {
        if (view === payload) {
          validView = true;
        }
      });

      if (validView) {
        return payload;
      }

      // eslint-disable-next-line
      console.error(`View does not exist: ${payload}`, payload);

      return state;
    }

    case 'SAVE_MANTRA':
    case 'DELETE_MANTRA':
      return 'LoopView';

    case 'REGISTER':
      return 'ProfileView'

    default:
      return state;
  }
};

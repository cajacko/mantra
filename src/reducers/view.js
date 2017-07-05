import views from 'constants/views';

const defaultState = 'LoopView';

export default (state = defaultState, { type, payload }) => {
  switch (type) {
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
      console.error(`View does no exist: ${payload}`, payload);

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

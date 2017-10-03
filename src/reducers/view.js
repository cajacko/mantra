import views from 'constants/views';

const defaultState = { view: 'SuggestedView', props: {} };

export default (state = { view: null, props: {} }, { type, payload }) => {
  switch (type) {
    // Even though is same as default, don't use default as is misleading. And
    // if change default later, might forget that we want this to go here
    case 'LOGIN':
      return { view: 'DisplayView', props: {} };

    case 'persist/REHYDRATE':
    case 'LOGOUT':
      return defaultState;

    case 'SWITCH_VIEW': {
      let isValidView = false;
      const newState = Object.assign({}, payload);

      views.forEach((validView) => {
        if (validView === newState.view) {
          isValidView = true;
        }
      });

      if (!newState.props) {
        newState.props = {};
      }

      if (isValidView) {
        return newState;
      }

      // eslint-disable-next-line
      console.error(`View does not exist: ${payload}`, payload);

      return state;
    }

    case 'SAVE_MANTRA':
    case 'DELETE_MANTRA':
      return { view: 'LoopView', props: {} };

    case 'REGISTER':
      return { view: 'ProfileView', props: {} };

    default:
      return state;
  }
};

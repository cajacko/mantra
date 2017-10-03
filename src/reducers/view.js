import views from 'constants/views';

const defaultState = { view: 'DisplayView', props: {} };

export default (state = { view: null, props: {} }, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
    case 'REGISTER':
      return { view: 'SuggestedView', props: {} };

    case 'persist/REHYDRATE':
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

    case 'SAVE_MANTRA': {
      // Do not redirect is we are saving a suggestion
      if (payload.suggestionId) {
        return state;
      }

      return { view: 'LoopView', props: {} };
    }

    case 'LOGOUT':
      return { view: 'LoginRegisterView', props: {} };

    case 'DELETE_MANTRA':
      return { view: 'LoopView', props: {} };

    default:
      return state;
  }
};

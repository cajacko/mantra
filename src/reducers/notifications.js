const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'LOGOUT':
      return defaultState;

    case 'SET_NOTIFICATIONS': {
      const newState = Object.assign({}, state);
      newState[payload.time] = payload.value;
      return newState;
    }

    case 'SET_PERMISSIONS': {
      const newState = Object.assign({}, state);

      if (payload.permissions === 'granted' && payload.time) {
        newState[payload.time] = payload.value;
        return newState;
      }

      return newState;
    }

    default:
      return state;
  }
};

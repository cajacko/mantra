const defaultState = [];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'DISCARD_SUGGESTION': {
      const newState = Object.assign([], state);

      if (!newState.includes(payload)) {
        newState.push(payload);
      }

      return newState;
    }

    case 'LOGOUT':
      return defaultState;

    default:
      return state;
  }
};

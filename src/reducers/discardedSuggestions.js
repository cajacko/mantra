import combineArrays from 'helpers/combineArrays';

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

    case 'SYNC_SUCCESS':
      return combineArrays(state, payload.discardedSuggestions);

    case 'LOGOUT':
      return defaultState;

    default:
      return state;
  }
};

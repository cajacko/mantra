/**
 * An array of all the requests ID that we will accept responses from. If it's
 * not in here we will ignore it. Food for cancelling requests, when logout etc.
 */

const defaultState = [];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'SYNC_INIT': {
      const newState = Object.assign([], state);
      newState.push(payload.id);
      return newState;
    }

    default:
      return state;
  }
};

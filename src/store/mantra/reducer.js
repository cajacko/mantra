import mergeItems from 'helpers/mergeItems';

const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'LOGOUT':
      return defaultState;

    case 'SAVE_MANTRA': {
      const modifiedState = Object.assign({}, state);

      modifiedState[payload.mantra.id] = payload.mantra;

      return modifiedState;
    }

    case 'DELETE_MANTRA': {
      const modifiedState = Object.assign({}, state);
      modifiedState[payload.id].deleted = true;
      modifiedState[payload.id].dateModified = payload.dateModified;
      return modifiedState;
    }

    case 'SYNC_SUCCESS': {
      return mergeItems(state, payload.items);
    }

    case 'LOGIN':
      return mergeItems(state, payload.data.items);

    default:
      return state;
  }
};

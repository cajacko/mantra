export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'SAVE_MANTRA': {
      const modifiedState = Object.assign({}, state);

      modifiedState[payload.id] = payload;

      return modifiedState;
    }

    case 'DELETE_MANTRA': {
      const modifiedState = Object.assign({}, state);
      modifiedState[payload.id].deleted = true;
      modifiedState[payload.id].dateModified = payload.dateModified;
      return modifiedState;
    }

    case 'SYNC_SUCCESS':
      return payload;

    case 'LOGIN':
      return payload.data.items;

    default:
      return state;
  }
};

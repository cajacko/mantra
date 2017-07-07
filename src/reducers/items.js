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

    case 'UPDATE_VERSION': {
      const modifiedState = Object.assign({}, state);

      Object.keys(modifiedState).forEach((id) => {
        const item = modifiedState[id];

        if (!item.dateModified) {
          item.dateModified = item.dateAdded;
        }

        modifiedState[id] = item;
      });

      return modifiedState;
    }

    default:
      return state;
  }
};

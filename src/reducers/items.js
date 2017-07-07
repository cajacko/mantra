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
        const item = {
          title: 'No title',
          id,
          dateAddded: payload.timestamp,
          dateModified: payload.timestamp,
          online: false,
          deleted: false,
        };

        const oldItem = modifiedState[id];

        if (oldItem.title !== undefined) {
          item.title = oldItem.title;
        }

        if (oldItem.dateAdded !== undefined) {
          item.dateAdded = oldItem.dateAdded;
        }

        if (oldItem.dateModified !== undefined) {
          item.dateModified = oldItem.dateModified;
        } else if (oldItem.dateAdded !== undefined) {
          item.dateModified = oldItem.dateAdded;
        }

        if (oldItem.online !== undefined) {
          item.online = oldItem.online;
        }

        if (oldItem.deleted !== undefined) {
          item.deleted = oldItem.deleted;
        }

        modifiedState[id] = item;
      });

      return modifiedState;
    }

    default:
      return state;
  }
};

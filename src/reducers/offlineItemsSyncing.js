const defaultState = [];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'SYNC_INIT':
      return payload.items;

    case 'SYNC_SUCCESS':
    case 'SYNC_ERROR':
    case 'persist/REHYDRATE':
      return defaultState;

    default:
      return state;
  }
};

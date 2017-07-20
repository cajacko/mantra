export default (state = false, { type }) => {
  switch (type) {
    case 'SYNC_INIT':
      return true;

    case 'SYNC_SUCCESS':
    case 'SYNC_ERROR':
    case 'persist/REHYDRATE':
      return false;

    default:
      return state;
  }
};

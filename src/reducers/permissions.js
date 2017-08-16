export default (state = null, { type, payload }) => {
  switch (type) {
    case 'SET_PERMISSIONS':
      return payload.permissions;

    default:
      return state;
  }
};

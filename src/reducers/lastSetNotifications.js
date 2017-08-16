export default (state = null, { type, payload }) => {
  switch (type) {
    case 'LOGOUT':
    case 'SET_NOTIFICATIONS':
    case 'SET_PERMISSIONS':
      return null;

    case 'LAST_SET_NOTIFICATIONS':
      return payload;

    default:
      return state;
  }
};

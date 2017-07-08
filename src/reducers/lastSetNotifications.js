export default (state = null, { type, payload }) => {
  switch (type) {
    case 'LOGOUT':
      return null;

    case 'LAST_SET_NOTIFICATIONS':
      return payload;

    default:
      return state;
  }
};

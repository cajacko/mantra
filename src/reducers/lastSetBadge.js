export default (state = null, { type, payload }) => {
  switch (type) {
    case 'LOGOUT':
      return null;

    case 'LAST_SET_BADGE':
      return payload;

    default:
      return state;
  }
};

export default (state = null, { type, payload }) => {
  switch (type) {
    case 'UPDATE_VERSION':
      return payload.version;

    default:
      return state;
  }
};

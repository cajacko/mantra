export default (state = null, { type, payload }) => {
  // return null;

  switch (type) {
    case 'REGISTER':
      return payload;

    case 'LOGIN':
      return payload.myjsonId;

    default:
      return state;
  }
};

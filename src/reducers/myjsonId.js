export default (state = null, { type, payload }) => {
  switch (type) {
    case 'REGISTER_SUCCESS':
      return payload;

    case 'LOGIN_SUCCESS':
      return payload.myjsonId;

    default:
      return state;
  }
};

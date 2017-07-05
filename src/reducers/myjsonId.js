export default (state = null, { type, payload }) => {
  switch (type) {
    case 'REGISTER': {
      const parts = payload.split('/');
      return parts[parts.length - 1];
    }

    case 'LOGIN':
      return payload.myjsonId;

    default:
      return state;
  }
};

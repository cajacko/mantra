const defaultState = null;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'LOGOUT':
      return defaultState;

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

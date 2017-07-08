export default (state = false, { type, payload }) => {
  switch (type) {
    case 'LOGOUT':
      return false;

    case 'SET_NOTIFICATIONS':
      return payload;

    case 'SET_PERMISSIONS':
      if (payload === 'granted') {
        return true;
      }

      return false;

    default:
      return state;
  }
};

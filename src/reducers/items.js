export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'SAVE_MANTRA': {
      const modifiedState = Object.assign({}, state);

      modifiedState[payload.id] = payload;

      return modifiedState;
    }

    case 'DELETE_MANTRA': {
      const modifiedState = Object.assign({}, state);

      delete modifiedState[payload];

      return modifiedState;
    }

    default:
      return state;
  }
};

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SAVE_MANTRA': {
      const modifiedState = Object.assign([], state);

      modifiedState.unshift(payload.id);

      return modifiedState;
    }

    default:
      return state;
  }
};

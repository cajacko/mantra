export default (state = [], { type, payload }) => {
  switch (type) {
    case 'DISCARD_SUGGESTION': {
      const newState = Object.assign([], state);

      if (!newState.includes(payload)) {
        newState.push(payload);
      }

      return newState;
    }

    default:
      return state;
  }
};

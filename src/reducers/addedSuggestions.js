export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SAVE_MANTRA': {
      // Only updated added suggestion if the mantra being saved is a suggestion
      if (!payload.suggestionId) {
        return state;
      }

      const newState = Object.assign([], state);

      if (!newState.includes(payload.suggestionId)) {
        newState.push(payload.suggestionId);
      }

      return newState;
    }

    default:
      return state;
  }
};

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SAVE_MANTRA': {
      const modifiedState = Object.assign([], state);

      modifiedState.unshift(payload.id);

      return modifiedState;
    }

    case 'DELETE_MANTRA': {
      const modifiedState = Object.assign([], state);

      const index = modifiedState.indexOf(payload);

      if (index > -1) {
        modifiedState.splice(index, 1);
      }

      return modifiedState;
    }

    case 'DOWNLOAD_SUCESS':
      return payload.mantraLoop;

    default:
      return state;
  }
};

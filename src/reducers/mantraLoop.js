import mantra from 'constants/data';

const defaultState = [];

mantra.forEach(item => defaultState.push(item.id));

export default (state = defaultState, { type, payload }) => {
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

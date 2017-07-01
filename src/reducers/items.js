import mantra from 'constants/data';

const defaultState = {};

mantra.forEach((item) => {
  defaultState[item.id] = item;
});

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'ADD_MANTRA': {
      const modifiedState = Object.assign({}, state);

      modifiedState[payload.id] = payload;

      return modifiedState;
    }

    default:
      return state;
  }
};

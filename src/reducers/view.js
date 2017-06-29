const defaultState = {
  view: 'list',
  props: {},
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'SWITCH_VIEW':
      return payload;
    default:
      return state;
  }
};

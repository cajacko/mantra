const defaultState = {
  view: 'list',
  props: {},
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'SWITCH_VIEW':
      return payload;
    case 'DELETE_MANTRA':
      return { view: 'list', props: {} };
    default:
      return state;
  }
};

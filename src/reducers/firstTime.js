export default (state = true, { type }) => {
  switch (type) {
    case 'LOGOUT':
    case 'SWITCH_VIEW':
      return false;

    default:
      return state;
  }
};

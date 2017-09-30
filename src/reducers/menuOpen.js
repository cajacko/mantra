export default (state = false, { type }) => {
  switch (type) {
    case 'OPEN_MENU':
      return true;

    case 'SWITCH_VIEW':
    case 'CLOSE_MENU':
      return false;

    default:
      return state;
  }
};

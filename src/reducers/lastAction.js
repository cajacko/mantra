export default (state = null, { type }) => {
  if (type) {
    return type;
  }

  return null;
};

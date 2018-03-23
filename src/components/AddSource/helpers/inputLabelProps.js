const inputLabelProps = (value, autoFocus) => {
  let float;

  if (autoFocus) {
    float = false;
  } else {
    float = !value || value === '';
  }

  return {
    stackedLabel: !float,
    floatingLabel: !!float,
  };
};

export default inputLabelProps;

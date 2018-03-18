const inputLabelProps = (value) => {
  const float = !value || value === '';

  return {
    stackedLabel: !float,
    floatingLabel: !!float,
  };
};

export default inputLabelProps;

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/TextButton/TextButton.style';

const TextButton = ({ action, text }) => (
  <TouchableOpacity onPress={action}>
    <Text style={style.text}>{text}</Text>
  </TouchableOpacity>
);

TextButton.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextButton;

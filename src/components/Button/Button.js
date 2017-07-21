import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/Button/Button.style';

const Button = ({ onPress, text, theme }) => {
  let buttonStyle = style.button;
  let textStyle = style.buttonText;

  switch (theme) {
    case 'default':
      buttonStyle = { ...buttonStyle, ...style.buttonDefault };
      textStyle = { ...textStyle, ...style.textDefault };
      break;

    case 'dull':
      buttonStyle = { ...buttonStyle, ...style.buttonDull };
      textStyle = { ...textStyle, ...style.textDull };
      break;

    default:
      break;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['default', 'dull']),
};

Button.defaultProps = {
  theme: 'default',
};

export default Button;

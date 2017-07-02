import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/NetworkButton/NetworkButton.style';

const NetworkButton = ({ action, text }) => (
  <TouchableOpacity onPress={action}>
    <View style={style.button}>
      <Text style={style.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

NetworkButton.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default NetworkButton;

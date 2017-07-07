import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import style from 'components/DisplayMantra/DisplayMantra.style';

const DisplayMantra = ({ title }) => {
  const textStyle = Object.assign({}, style.text);

  if (title.length > 60) {
    textStyle.fontSize = 20;
  } else if (title.length > 22) {
    textStyle.fontSize = 30;
  } else {
    textStyle.fontSize = 50;
  }

  textStyle.lineHeight = textStyle.fontSize * 1.5;

  return (
    <View style={style.container}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

DisplayMantra.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DisplayMantra;

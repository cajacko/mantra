import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import style from 'components/DisplayMantra/DisplayMantra.style';

const DisplayMantra = ({ title, edit }) => {
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
      <TouchableOpacity onPress={edit}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

DisplayMantra.propTypes = {
  title: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired,
};

export default DisplayMantra;

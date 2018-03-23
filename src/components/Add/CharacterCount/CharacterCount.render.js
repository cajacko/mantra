import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/Add/CharacterCount/CharacterCount.style';

const CharacterCount = ({ count }) => {
  const containerStyle = [style.container];

  if (count < 0) {
    containerStyle.push(style.containerNegative);
  }

  return (
    <View style={containerStyle}>
      <Text style={style.text}>{count}</Text>
    </View>
  );
};

CharacterCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CharacterCount;

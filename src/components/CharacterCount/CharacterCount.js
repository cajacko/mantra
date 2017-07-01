import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const CharacterCount = ({ count }) => (
  <View>
    <Text>{count}</Text>
  </View>
);

CharacterCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CharacterCount;

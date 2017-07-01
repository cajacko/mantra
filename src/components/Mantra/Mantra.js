import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Mantra = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Mantra.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Mantra;

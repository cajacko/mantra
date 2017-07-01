import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/Mantra/Mantra.style';

const Mantra = ({ title, last }) => {
  const containerStyles = [style.container];

  if (last) {
    containerStyles.push(style.last);
  }

  return (
    <View style={containerStyles}>
      <Text style={style.text}>{title}</Text>
    </View>
  );
};

Mantra.propTypes = {
  title: PropTypes.string.isRequired,
  last: PropTypes.bool,
};

Mantra.defaultProps = {
  last: false,
};

export default Mantra;

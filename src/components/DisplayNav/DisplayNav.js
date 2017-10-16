import React from 'react';
import { Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import style from 'components/DisplayNav/DisplayNav.style';

const DisplayNav = ({ icon }) => (
  <View style={{ ...style.container, height: Dimensions.get('window').height }}>
    <Ionicons name={icon} size={style.iconSize} color={style.iconColour} />
  </View>
);

DisplayNav.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default DisplayNav;

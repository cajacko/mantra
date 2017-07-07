import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from 'components/DisplayNav/DisplayNav.style';

const DisplayNav = ({ action, icon }) => (
  <TouchableOpacity onPress={action}>
    <View style={style.iconWrapper}>
      <Ionicons name={icon} size={style.iconSize} color={style.iconColour} />
    </View>
  </TouchableOpacity>
);

DisplayNav.propTypes = {
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default DisplayNav;

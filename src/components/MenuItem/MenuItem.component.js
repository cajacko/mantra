import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from 'components/MenuItem/MenuItem.style';

const MenuItem = ({ action, title, icon }) => (
  <View style={style.container}>
    <TouchableOpacity onPress={action} style={style.wrapper}>
      <Ionicons name={icon} size={style.iconSize} color={style.iconColour} />
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default MenuItem;

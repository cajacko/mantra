import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from 'components/NavButton/NavButton.style';

const NavButton = ({ action, icon, active, title }) => {
  let buttonColour = style.iconColour;

  if (active) {
    buttonColour = style.iconColourActive;
  }

  return (
    <View style={style.icon}>
      <TouchableOpacity onPress={action} style={style.iconWrapper}>
        <View style={style.touchWrap}>
          <Ionicons name={icon} size={style.iconSize} color={buttonColour} />
          <Text style={style.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

NavButton.propTypes = {
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NavButton.defaultProps = {
  active: false,
};

export default NavButton;

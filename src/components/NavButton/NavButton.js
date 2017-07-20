import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from 'components/NavButton/NavButton.style';

const NavButton = ({ action, icon, active }) => {
  let buttonColour = style.iconColour;

  if (active) {
    buttonColour = style.iconColourActive;
  }

  return (
    <View style={style.icon}>
      <TouchableOpacity onPress={action} style={style.iconWrapper}>
        <Ionicons name={icon} size={style.iconSize} color={buttonColour} />
      </TouchableOpacity>
    </View>
  );
};

NavButton.propTypes = {
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

NavButton.defaultProps = {
  active: false,
};

export default NavButton;

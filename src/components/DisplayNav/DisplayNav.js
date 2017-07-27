import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import style from 'components/DisplayNav/DisplayNav.style';

const DisplayNav = ({ icon }) => (
  <Ionicons name={icon} size={style.iconSize} color={style.iconColour} />
);

DisplayNav.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default DisplayNav;

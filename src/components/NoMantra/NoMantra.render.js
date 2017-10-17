import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/NoMantra/NoMantra.style';
import Button from 'components/Button/Button';

/**
 * The markup for the No Mantra component
 *
 * @param {Function} onPress The action when the add now button is pressed
 * @return {Component} JSX Component
 */
const NoMantra = ({ onPress }) => (
  <View style={style.wrapper}>
    <Text style={style.noneMessage}>{"You don't have any mantras yet!"}</Text>
    <View style={style.addButton}>
      <Button onPress={onPress} text="Add one now" theme="default" />
    </View>
  </View>
);

NoMantra.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default NoMantra;

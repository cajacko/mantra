import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';
import style from 'components/Mantra/Mantra.style';

function swipeoutBtns(onPress) {
  return [{ text: 'Delete', onPress }];
}

const Mantra = ({ title, last, deleteMantra }) => {
  const containerStyles = [style.container];

  if (last) {
    containerStyles.push(style.last);
  }

  return (
    <Swipeout
      right={swipeoutBtns(deleteMantra)}
      style={containerStyles}
      autoClose
    >
      <View style={style.wrapper}>
        <Text style={style.text}>{title}</Text>
      </View>
    </Swipeout>
  );
};

Mantra.propTypes = {
  title: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
  deleteMantra: PropTypes.func.isRequired,
};

export default Mantra;

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';
import style from 'components/Mantra/Mantra.style';

function swipeoutBtns(deleteAction, edit) {
  return [
    { text: 'Delete', onPress: deleteAction, backgroundColor: style.deleteBackground, color: style.buttonColour },
    { text: 'Edit', onPress: edit, backgroundColor: style.editBackground, color: style.buttonColour },
  ];
}

const Mantra = ({ title, last, deleteMantra, editMantra, online }) => {
  const containerStyles = [style.container];
  let syncIcon;

  if (last) {
    containerStyles.push(style.last);
  }

  if (!online) {
    syncIcon = (
      <View style={style.icon}>
        <Ionicons name="ios-sync" size={style.iconSize} color={style.iconColour} />
      </View>
    );
  }

  return (
    <Swipeout
      right={swipeoutBtns(deleteMantra, editMantra)}
      style={containerStyles}
      autoClose
      sensitivity={50}
    >
      <View style={style.wrapper}>
        <Text style={style.text}>{title}</Text>
        {syncIcon}
      </View>
    </Swipeout>
  );
};

Mantra.propTypes = {
  title: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
  deleteMantra: PropTypes.func.isRequired,
  online: PropTypes.bool.isRequired,
  editMantra: PropTypes.func.isRequired,
};

export default Mantra;

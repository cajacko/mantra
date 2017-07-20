import React from 'react';
import { View, Text, Animated } from 'react-native';
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

const Mantra = ({
  last,
  online,
  rotation,
  deleteMantra,
  editMantra,
  title,
  syncing,
}) => {
  const containerStyles = [style.container];
  let syncIcon;

  if (last) {
    containerStyles.push(style.last);
  }

  if (!online) {
    let viewStyle = style.icon;

    if (syncing) {
      viewStyle = { ...viewStyle, transform: [{ rotate: rotation }] };
    }

    syncIcon = (
      <Animated.View style={viewStyle}>
        <Ionicons name="ios-sync" size={style.iconSize} color={style.iconColour} />
      </Animated.View>
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
  syncing: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  rotation: PropTypes.object,
};

Mantra.defaultProps = {
  rotation: null,
};

export default Mantra;

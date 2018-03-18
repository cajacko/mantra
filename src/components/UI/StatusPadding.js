import React from 'react';
import { View, Platform } from 'react-native';
import { Constants } from 'expo';

function shouldShow({ androidOnly }) {
  if (!androidOnly) return true;

  return Platform.OS === 'android';
}

const StatusPadding = props =>
  shouldShow(props) && <View style={{ height: Constants.statusBarHeight }} />;

export default StatusPadding;

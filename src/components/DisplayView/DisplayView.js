import React from 'react';
import { View, StatusBar } from 'react-native';
import style from 'components/LoopView/LoopView.style';

const DisplayView = () => (
  <View style={style.container}>
    <StatusBar barStyle="dark-content" />
  </View>
);

export default DisplayView;

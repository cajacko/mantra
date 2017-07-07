import React from 'react';
import { View, StatusBar } from 'react-native';
import MantraLoop from 'containers/MantraLoop/MantraLoop';
import style from 'components/LoopView/LoopView.style';

const LoopView = () => (
  <View style={style.container}>
    <StatusBar barStyle="dark-content" />
    <MantraLoop />
  </View>
);

export default LoopView;

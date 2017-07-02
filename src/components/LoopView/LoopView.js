import React from 'react';
import { View, StatusBar } from 'react-native';
import MantraLoop from 'containers/MantraLoop/MantraLoop';
import AddButton from 'containers/AddButton/AddButton';
import style from 'components/LoopView/LoopView.style';

const LoopView = () => (
  <View style={style.container}>
    <StatusBar barStyle="dark-content" />
    <MantraLoop />
    <AddButton />
  </View>
);

export default LoopView;

import React from 'react';
import { View, StatusBar } from 'react-native';
import MantraLoop from 'containers/MantraLoop/MantraLoop';
import style from 'components/LoopView/LoopView.style';
import EmptyView from 'containers/EmptyView/EmptyView';

const LoopView = () => (
  <EmptyView>
    <View style={style.container}>
      <MantraLoop />
    </View>
  </EmptyView>
);

export default LoopView;

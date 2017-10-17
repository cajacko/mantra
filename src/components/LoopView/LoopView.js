import React from 'react';
import { View } from 'react-native';
import MantraLoop from 'components/MantraLoop/MantraLoop.container';
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

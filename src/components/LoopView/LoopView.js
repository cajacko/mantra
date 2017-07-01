import React from 'react';
import { View } from 'react-native';
import MantraLoop from 'containers/MantraLoop/MantraLoop';
import AddButton from 'containers/AddButton/AddButton';

const LoopView = () => (
  <View>
    <MantraLoop />
    <AddButton />
  </View>
);

export default LoopView;

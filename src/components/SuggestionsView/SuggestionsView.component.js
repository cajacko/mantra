import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import style from 'components/SuggestionsView/SuggestionsView.style';

/**
 * View for mantra suggestions
 * @return {jsx} Return jsx markup
 */
const SuggestionsView = () => (
  <View style={style.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={style.title}>SuggestionsView</Text>
  </View>
);

export default SuggestionsView;

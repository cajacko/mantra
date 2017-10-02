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
    <Text style={style.description}>
      Here are some suggested mantra to add!
    </Text>
  </View>
);

export default SuggestionsView;

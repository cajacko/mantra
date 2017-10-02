import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import style from 'components/SuggestionsView/SuggestionsView.style';

const suggestions = [];

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
    <View style={style.content}>
      {suggestions.length === 0 && (
        <View style={style.noMoreContainer}>
          <Text style={style.noMoreText}>
            {"Looks like you've gone through all our suggestions!"}
          </Text>
        </View>
      )}
    </View>
  </View>
);

export default SuggestionsView;

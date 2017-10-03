import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/SuggestionsView/SuggestionsView.style';
import SuggestionsLoop from 'components/SuggestionsLoop/SuggestionsLoop.component';
import SuggestionsHeader from 'components/SuggestionsHeader/SuggestionsHeader.render';

/**
 * View for mantra suggestions
 * @param  {array} suggestions Array of suggestion ids
 * @return {jsx} Return jsx markup
 */
const SuggestionsView = ({ suggestions }) => (
  <View style={style.container}>
    <StatusBar barStyle="dark-content" />
    <SuggestionsHeader text="Here are some suggested mantra to add!" />
    <View style={style.content}>
      {suggestions.length === 0 ? (
        <View style={style.noMoreContainer}>
          <Text style={style.noMoreText}>
            {"Looks like you've gone through all our suggestions!"}
          </Text>
        </View>
      ) : (
        <SuggestionsLoop suggestions={suggestions} />
      )}
    </View>
  </View>
);

SuggestionsView.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SuggestionsView;

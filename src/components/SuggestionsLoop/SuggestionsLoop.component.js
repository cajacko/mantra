import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Suggestion from 'components/Suggestion/Suggestion.container';

/**
 * Render a list of suggested Mantra
 *
 * @param {array} suggestions Array of suggested Mantra
 * @return {Component} JSX component to render
 */
const SuggestionsLoop = ({ suggestions }) => (
  <FlatList
    data={suggestions}
    renderItem={({ item }) => (
      <Suggestion
        key={item.id}
        id={item.id}
        title={item.title}
        isSuggestion
        initial
      />
    )}
  />
);

SuggestionsLoop.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SuggestionsLoop;

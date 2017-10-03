import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Suggestion from 'components/Suggestion/Suggestion.container';

const SuggestionsLoop = ({ suggestions }) => (
  <FlatList
    data={suggestions}
    renderItem={({ id, title }) => (
      <Suggestion key={id} title={title} isSuggestion />
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

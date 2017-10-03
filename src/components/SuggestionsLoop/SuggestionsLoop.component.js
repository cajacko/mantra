import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Mantra from 'components/Mantra/Mantra.render';

const SuggestionsLoop = ({ suggestions }) => (
  <FlatList
    data={suggestions}
    renderItem={({ item }) => (
      <Mantra key={item.id} title={item.title} isSuggestion initial />
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

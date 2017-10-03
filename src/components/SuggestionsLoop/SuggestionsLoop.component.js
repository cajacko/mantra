import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Mantra from 'components/Mantra/Mantra.render';

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
      <Mantra
        key={item.id}
        title={item.title}
        isSuggestion
        initial
        discard={() => {}}
        add={() => {}}
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

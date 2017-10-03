import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SuggestionsLoopItem from 'components/SuggestionsLoopItem/SuggestionsLoopItem.render';

/**
 * Render a list of suggested Mantra
 *
 * @param {array} suggestions Array of suggested Mantra
 * @return {Component} JSX component to render
 */
const SuggestionsLoop = ({ suggestions, noMantra }) => {
  const data = Object.assign([], suggestions);

  if (noMantra) {
    data.unshift({
      key: 'noMantra',
      noMantra: true,
    });
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <SuggestionsLoopItem key={item.id} id={item.id} title={item.title} />
      )}
    />
  );
};

SuggestionsLoop.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  noMantra: PropTypes.bool,
};

SuggestionsLoop.defaultProps = {
  noMantra: false,
};

export default SuggestionsLoop;

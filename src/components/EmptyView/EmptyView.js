import React from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/EmptyView/EmptyView.style';
import SuggestionsLoop from 'components/SuggestionsLoop/SuggestionsLoop.component';
import NoMantra from 'components/NoMantra/NoMantra.container';

/**
 * Display the empty view, for when you have no mantra. Will also show suggested
 * posts if there are any. If there are mantra, then will show the children
 *
 * @param {Boolean} hasVisibleMantra If there are mantra then display them
 * @param {Component}  children         Children components to display
 * @param {Array}  suggestions      Array of suggested mantra
 * @return {Component} JSX component
 */
const EmptyView = ({ hasVisibleMantra, children, suggestions }) => {
  if (hasVisibleMantra) {
    return children;
  }

  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      {suggestions.length ? (
        <SuggestionsLoop suggestions={suggestions} noMantra />
      ) : (
        <View style={style.wrapper}>
          <NoMantra />
        </View>
      )}
    </View>
  );
};

EmptyView.propTypes = {
  hasVisibleMantra: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default EmptyView;

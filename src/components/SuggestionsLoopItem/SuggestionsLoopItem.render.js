import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Suggestion from 'components/Suggestion/Suggestion.container';
import NoMantra from 'components/NoMantra/NoMantra.container';
import SuggestionsHeader from 'components/SuggestionsHeader/SuggestionsHeader.render';

/**
 * Render the Suggestion or the No Mantra and Suggestions header
 *
 * @param {?boolean} noMantra Whether to display the no mantra Component
 * @param {?string} id       The suggestion id to show
 * @param {?string} title    The suggestion title
 * @return {Component} JSX component
 */
const SuggestionsLoopItem = ({ noMantra, id, title }) => {
  if (noMantra) {
    return (
      <View>
        <NoMantra />
        <SuggestionsHeader text="Or add some of these suggested Mantra" />
      </View>
    );
  }

  return <Suggestion id={id} title={title} isSuggestion initial />;
};

SuggestionsLoopItem.propTypes = {
  noMantra: PropTypes.bool,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

SuggestionsLoopItem.defaultProps = {
  noMantra: false,
};

export default SuggestionsLoopItem;

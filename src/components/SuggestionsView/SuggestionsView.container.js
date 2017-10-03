/* @flow */

import { connect } from 'react-redux';
import SuggestionsView from 'components/SuggestionsView/SuggestionsView.component';

/**
 * Map store state to component props. Filter the suggestions by which ones are
 * in added suggestions and discard suggestions
 *
 * @param  {object} suggestions Keyed mantra suggestions
 * @return {object}             Props to pass to component
 */
const mapStateToProps = ({
  suggestions,
  addedSuggestions,
  discardedSuggestions,
}) => {
  const items = suggestions.filter(({ id }) => {
    if (addedSuggestions.includes(id)) {
      return false;
    }

    if (discardedSuggestions.includes(id)) {
      return false;
    }

    return true;
  });

  return {
    suggestions: items,
  };
};

export default connect(mapStateToProps, undefined)(SuggestionsView);

/* @flow */

import { connect } from 'react-redux';
import SuggestionsView from 'components/SuggestionsView/SuggestionsView.component';
import getAvailableSuggestions from 'helpers/getAvailableSuggestions';

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
}) => ({
  suggestions: getAvailableSuggestions(
    suggestions,
    addedSuggestions,
    discardedSuggestions,
  ),
});

export default connect(mapStateToProps, undefined)(SuggestionsView);

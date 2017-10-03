/* @flow */

import { connect } from 'react-redux';
import SuggestionsView from 'components/SuggestionsView/SuggestionsView.component';

/**
 * Map store state to component props
 * @param  {object} suggestions Keyed mantra suggestions
 * @return {object}             Props to pass to component
 */
const mapStateToProps = ({ suggestions }) => ({
  suggestions,
});

export default connect(mapStateToProps, undefined)(SuggestionsView);

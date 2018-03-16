/* @flow */

import { connect } from 'react-redux';
import Mantra from 'components/Mantra/Mantra.render';
import discardSuggestion from 'actions/discardSuggestion';
import saveMantra from 'actions/saveMantra';

/**
 * Map dispatch actions to props for component
 *
 * @param  {function} dispatch Dispatch function to send actions to the store
 * @param  {string} id       Passed id prop of the suggested mantra item
 * @param  {string} title    Passed title prop of the suggested mantra
 * @return {object}          Object mapping actions to props for mantra
 */
const mapDispatchToProps = (dispatch, { id, title }) => ({
  add: () => dispatch(saveMantra({ title, suggestionId: id })),
  discard: () => dispatch(discardSuggestion(id)),
});

export default connect(undefined, mapDispatchToProps)(Mantra);

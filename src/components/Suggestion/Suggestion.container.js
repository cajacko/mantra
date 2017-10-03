/* @flow */

import { connect } from 'react-redux';
import Mantra from 'components/Mantra/Mantra.render';
import { add, discard } from 'actions/suggestedMantra';

/**
 * Map dispatch actions to props for component
 *
 * @param  {function} dispatch Dispatch function to send actions to the store
 * @param  {string} id       Passed id prop of the suggested mantra item
 * @return {object}          Object mapping actions to props for mantra
 */
const mapDispatchToProps = (dispatch, { id }) => ({
  add: () => dispatch(add(id)),
  discard: () => dispatch(discard(id)),
});

export default connect(undefined, mapDispatchToProps)(Mantra);

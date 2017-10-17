/* @flow */

import { connect } from 'react-redux';
import MantraLoop from 'components/MantraLoop/MantraLoop.component';
import sync from 'actions/sync';

/**
 * Pass props from store to component
 *
 * @param  {Object} state The state in the store
 * @param  {Object} props The props passed to the component
 * @return {Object}          Additional object props to pass to the component
 */
const mapStateToProps = (
  { suggestions, items, myjsonId, lastAction },
  { isSuggestions },
) => ({
  items: isSuggestions ? suggestions : items,
  myjsonId,
  lastAction,
});

/**
 * Pass dispatch functions to component
 *
 * @param  {functions} dispatch the redux dispatch function, to send actions to
 * the store
 * @return {Object}          Object mapping prop names to dispatch functions
 */
const mapDispatchToProps = (dispatch: () => {}) => ({
  sync: () => dispatch(sync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MantraLoop);

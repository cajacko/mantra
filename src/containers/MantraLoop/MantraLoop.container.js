/* @flow */

import { connect } from 'react-redux';
import MantraLoop from 'containers/MantraLoop/MantraLoop';
import sync from 'actions/sync';

const mapStateToProps = (
  { suggestions, items, myjsonId, lastAction },
  { isSuggestions },
) => ({
  items: isSuggestions ? suggestions : items,
  myjsonId,
  lastAction,
});

const mapDispatchToProps = dispatch => ({
  sync: () => dispatch(sync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MantraLoop);

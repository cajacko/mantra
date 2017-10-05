/* @flow */

import { connect } from 'react-redux';
import NoMantra from 'components/NoMantra/NoMantra.render';
import switchView from 'actions/switchView';

/**
 * Map the dispatcher actions to the components props
 *
 * @param  {function} dispatch Redux dispatch function
 * @return {Object}          The opeject of properties to pass to the component
 */
const mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(switchView('AddView')),
});

export default connect(undefined, mapDispatchToProps)(NoMantra);

/* @flow */

import { connect } from 'react-redux';
import Menu from 'components/Menu/Menu.component';
import { closeMenu, openMenu } from 'actions/menu';
import logout from 'actions/logout';
import switchView from 'actions/switchView';

/**
 * Pass the desired propd from the store to the component
 *
 * @param  {Object} state The state fromt he store
 * @return {Object}       The props to pass to the component
 */
const mapStateToProps = ({ menuOpen, myjsonId, version }) => ({
  open: menuOpen,
  isLoggedIn: myjsonId !== null,
  version,
});

/**
 * Pass dispatch functions to the component. So it can interact with the store
 *
 * @param  {Function} dispatch The store dispatcher
 * @return {Object}          Props to pass to the component
 */
const mapDispatchToProps = dispatch => ({
  closeMenu: () => dispatch(closeMenu()),
  logout: () => dispatch(logout()),
  switchView: view => dispatch(switchView(view)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

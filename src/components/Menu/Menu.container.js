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
  onChange: (isOpen, isOpenProp) => {
    // react-native-side-menu can emit a close event, under some conditions, as
    // this doesn't update the state, we need to manually update it even though
    // the menu is already animating. So here we check if it is closing, but
    // when the state still thinks it is open
    if (isOpen === false && isOpenProp === true) {
      dispatch(closeMenu());
      // When you drag the menu open from the side, it doesn't update the redux
      // state, so fire this action when that happens
    } else if (isOpen === true && isOpenProp === false) {
      dispatch(openMenu());
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

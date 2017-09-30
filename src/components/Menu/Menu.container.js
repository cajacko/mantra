/* @flow */

import { connect } from 'react-redux';
import Menu from 'components/Menu/Menu.component';
import { closeMenu, openMenu } from 'actions/menu';
import logout from 'actions/logout';

const mapStateToProps = (state) => {
  const { menuOpen } = state;
  return {
    open: menuOpen,
  };
};

const mapDispatchToProps = dispatch => ({
  closeMenu: () => dispatch(closeMenu()),
  logout: () => dispatch(logout()),
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

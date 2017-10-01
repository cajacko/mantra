import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import NavButton from 'components/NavButton/NavButton';
import Menu from 'components/Menu/Menu.container';
import style from 'components/NavView/NavView.style';

const NavView = ({ children, switchView, openMenu, activeItem, myjsonId }) => {
  let displayActive = false;
  let loopActive = false;
  let profileActive = false;
  let loginActive = false;

  switch (activeItem) {
    case 'LoginRegisterView':
      loginActive = true;
      break;
    case 'DisplayView':
      displayActive = true;
      break;
    case 'LoopView':
      loopActive = true;
      break;
    case 'ProfileView':
      profileActive = true;
      break;
    default:
      break;
  }

  return (
    <Menu>
      <View style={style.container}>
        <View style={style.children}>{children}</View>
        <View style={style.nav}>
          <NavButton
            action={() => switchView('DisplayView')}
            icon="ios-albums-outline"
            active={displayActive}
            title="Home"
          />
          <NavButton
            action={() => switchView('LoopView')}
            icon="ios-list-outline"
            active={loopActive}
            title="List"
          />
          <NavButton
            action={() => switchView('AddView')}
            icon="ios-add"
            title="Add"
          />
          <NavButton
            action={() =>
              switchView(myjsonId ? 'ProfileView' : 'LoginRegisterView')}
            icon="ios-contact-outline"
            active={myjsonId ? profileActive : loginActive}
            title="Account"
          />
          <NavButton
            action={() => openMenu()}
            icon="ios-menu-outline"
            title="More"
          />
        </View>
      </View>
    </Menu>
  );
};

NavView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  switchView: PropTypes.func.isRequired,
  openMenu: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  myjsonId: PropTypes.string,
};

NavView.defaultProps = {
  activeItem: null,
  myjsonId: null,
};

export default NavView;

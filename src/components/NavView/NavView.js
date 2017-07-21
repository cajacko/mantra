import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import NavButton from 'components/NavButton/NavButton';
import style from 'components/NavView/NavView.style';

const NavView = ({ children, switchView, logout, activeItem }) => {
  let displayActive = false;
  let loopActive = false;
  let profileActive = false;

  switch (activeItem) {
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
    <View style={style.container}>
      <View style={style.children}>
        {children}
      </View>
      <View style={style.nav}>
        <NavButton action={() => switchView('DisplayView')} icon="ios-albums-outline" active={displayActive} title="Slides" />
        <NavButton action={() => switchView('LoopView')} icon="ios-list-outline" active={loopActive} title="List" />
        <NavButton action={() => switchView('AddView')} icon="ios-add" title="Add" />
        <NavButton action={() => switchView('ProfileView')} icon="ios-contact-outline" active={profileActive} title="Profile" />
        <NavButton action={logout} icon="ios-exit-outline" title="Logout" />
      </View>
    </View>
  );
};

NavView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  switchView: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
};

NavView.defaultProps = {
  activeItem: null,
};

export default NavView;

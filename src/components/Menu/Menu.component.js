import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import { View, Text, StatusBar } from 'react-native';

const Menu = ({ open, children, onChange }) => {
  const menu = (
    <View>
      <StatusBar barStyle="dark-content" />
      <Text>Hello</Text>
    </View>
  );

  return (
    <SideMenu
      menu={menu}
      isOpen={open}
      disableGestures
      menuPosition="right"
      autoClosing={false}
      onChange={isOpen => onChange(isOpen, open)}
    >
      {children}
    </SideMenu>
  );
};

Menu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  open: PropTypes.bool.isRequired,
  // closeMenu: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Menu;

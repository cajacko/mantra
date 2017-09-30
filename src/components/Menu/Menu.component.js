import React from 'react';
import SideMenu from 'react-native-side-menu';
import { View, Text, StatusBar } from 'react-native';

const Menu = ({ open, closeMenu, children, onChange }) => {
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

export default Menu;

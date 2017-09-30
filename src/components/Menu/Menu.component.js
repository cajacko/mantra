import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import { View, Text, StatusBar } from 'react-native';
import style from 'components/Menu/Menu.style';

const Menu = ({ open, children, onChange }) => {
  const menu = (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <View style={style.header}>
        <Text style={style.title}>Menu</Text>
      </View>
      <View style={style.menuItems}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
        <Text>Item 4</Text>
      </View>
    </View>
  );

  return (
    <SideMenu
      menu={menu}
      isOpen={open}
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

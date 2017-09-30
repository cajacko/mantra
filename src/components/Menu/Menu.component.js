import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'components/SideMenu/SideMenu';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from 'components/Menu/Menu.style';

const Menu = ({ open, children, onChange, closeMenu }) => {
  const menu = (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <View style={style.header}>
        <Text style={style.title}>Menu</Text>
        <TouchableOpacity onPress={closeMenu} style={style.closeWrapper}>
          <Ionicons
            name="ios-close-outline"
            size={style.closeSize}
            color={style.closeColour}
          />
        </TouchableOpacity>
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
  closeMenu: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Menu;

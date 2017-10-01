/* eslint max-lines: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'components/SideMenu/SideMenu';
import { View, Text, StatusBar, TouchableOpacity, Alert } from 'react-native';
// eslint-disable-next-line  import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import style from 'components/Menu/Menu.style';
import MenuItem from 'components/MenuItem/MenuItem.component';
import email from 'helpers/email';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    Alert.alert('Logout', 'Any unsynced data will be lost', [
      { text: 'Cancel' },
      {
        text: 'Continue',
        onPress: () => this.props.logout(),
      },
    ]);
  }

  render() {
    const menu = (
      <View style={style.container}>
        <StatusBar barStyle="dark-content" />
        <View style={style.header}>
          <Text style={style.title}>Menu</Text>
          <TouchableOpacity
            onPress={this.props.closeMenu}
            style={style.closeWrapper}
          >
            <Ionicons
              name="ios-close-outline"
              size={style.closeSize}
              color={style.closeColour}
            />
          </TouchableOpacity>
        </View>
        <View style={style.menuItems}>
          {!this.props.isLoggedIn && (
            <MenuItem
              title="Login/Register"
              icon="ios-contact-outline"
              action={() => this.props.switchView('LoginRegisterView')}
            />
          )}
          <MenuItem
            title="Feedback"
            icon="ios-chatboxes-outline"
            action={() => email('feedback')}
          />
          <MenuItem
            title="Contact"
            icon="ios-mail-outline"
            action={() => email('contact')}
          />
          <MenuItem
            title="Help"
            icon="ios-help-outline"
            action={() => this.props.switchView('WelcomeView')}
          />
          {this.props.isLoggedIn && (
            <MenuItem
              title="Logout"
              icon="ios-exit-outline"
              action={this.logout}
            />
          )}
        </View>
      </View>
    );

    return (
      <SideMenu
        menu={menu}
        isOpen={this.props.open}
        menuPosition="right"
        autoClosing={false}
        onChange={isOpen => this.props.onChange(isOpen, this.props.open)}
      >
        {this.props.children}
      </SideMenu>
    );
  }
}

Menu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  open: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  switchView: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Menu;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'components/SideMenu/SideMenu';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
// eslint-disable-next-line  import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import style from 'components/Menu/Menu.style';
import MenuItem from 'components/MenuItem/MenuItem.component';
import email from 'helpers/email';

/**
 * The menu component, comes out from the side and allows navigation for second
 * level nav items
 * @type {class}
 */
class MenuRender extends PureComponent {
  /**
   * Render the menu
   * @return {JSX} Return the markup
   */
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
          <MenuItem
            title={this.props.isLoggedIn ? 'Account' : 'Login/Register'}
            icon="ios-contact-outline"
            action={() =>
              this.props.switchView(
                this.props.isLoggedIn ? 'ProfileView' : 'LoginRegisterView'
              )}
          />
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
              action={this.props.logout}
            />
          )}
        </View>

        <Text style={style.version}>Version: {this.props.version}</Text>
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

MenuRender.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  open: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  switchView: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  version: PropTypes.string.isRequired,
};

export default MenuRender;
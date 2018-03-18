import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'components/SideMenu/SideMenu';
import { View, StatusBar, TouchableOpacity } from 'react-native';
// eslint-disable-next-line  import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { Container, List, Text, Drawer } from 'native-base';
import style from 'components/Menu/Menu.style';
import MenuItem from 'components/MenuItem/MenuItem.component';
import email from 'helpers/email';
import StatusPadding from 'components/UI/StatusPadding';
/**
 * The menu component, comes out from the side and allows navigation for second
 * level nav items
 * @type {class}
 */
class MenuRender extends PureComponent {
  constructor(props) {
    super(props);

    this.drawer = null;
  }

  componentDidMount() {
    if (this.props.open) this.drawer._root.open();
  }

  componentWillReceiveProps({ open }) {
    if (open && !this.props.open) {
      this.drawer._root.open();
    } else if (!open && this.props.open) {
      this.drawer._root.close();
    }
  }

  /**
   * Render the menu
   * @return {JSX} Return the markup
   */
  render() {
    const menu = (
      <Container style={style.container}>
        <StatusPadding />
        <List style={style.menuItems}>
          <MenuItem
            title="Settings"
            icon="settings"
            action={() => this.props.switchView('SettingsView')}
          />
          <MenuItem
            title={this.props.isLoggedIn ? 'Account' : 'Login/Register'}
            icon="ios-contact-outline"
            action={() =>
              this.props.switchView(
                this.props.isLoggedIn ? 'ProfileView' : 'LoginRegisterView'
              )
            }
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
        </List>

        <Text style={style.version}>Version: {this.props.version}</Text>
      </Container>
    );

    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={menu}
        onClose={this.props.closeMenu}
      >
        {this.props.children}
      </Drawer>
    );
  }
}

MenuRender.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  open: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  switchView: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  version: PropTypes.string.isRequired,
};

export default MenuRender;

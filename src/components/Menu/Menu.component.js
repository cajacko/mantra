import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import MenuRender from 'components/Menu/Menu.render';

/**
 * Define the logic for the menu component. Show the logout alert on logout.
 *
 * @type {class}
 */
class Menu extends PureComponent {
  /**
   * Setup menu class, bind this to methods
   * @param  {object} props Passed React props
   * @return {void}       No return
   */
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  /**
   * Log the user out, give an alert so they have the choice to decline first
   * @return {void} No return
   */
  logout() {
    Alert.alert('Logout', 'Any unsynced data will be lost', [
      { text: 'Cancel' },
      {
        text: 'Continue',
        onPress: () => this.props.logout(),
      },
    ]);
  }

  /**
   * Render the menu
   * @return {Component} Return the menu component
   */
  render() {
    return (
      <MenuRender
        open={this.props.open}
        closeMenu={this.props.closeMenu}
        onChange={this.props.onChange}
        logout={this.logout}
        switchView={this.props.switchView}
        isLoggedIn={this.props.isLoggedIn}
        version={this.props.version}
      >
        {this.props.children}
      </MenuRender>
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
  version: PropTypes.string.isRequired,
};

export default Menu;

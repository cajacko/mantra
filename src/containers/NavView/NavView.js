import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavView from 'components/NavView/NavView';
import switchView from 'actions/switchView';
import logout from 'actions/logout';

class NavViewContainer extends Component {
  constructor(props) {
    super(props);

    this.switchView = this.switchView.bind(this);
    this.logout = this.logout.bind(this);
  }

  switchView(view) {
    this.props.dispatch(switchView(view));
  }

  logout() {
    Alert.alert('Logout', 'Any unsynced data will be lost', [
      { text: 'Cancel' },
      {
        text: 'Continue',
        onPress: () => this.props.dispatch(logout()),
      },
    ]);
  }

  render() {
    return (
      <NavView
        switchView={this.switchView}
        logout={this.logout}
        activeItem={this.props.view}
      >
        {this.props.children}
      </NavView>
    );
  }
}

NavViewContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};

function mapStateToProps({ view }) {
  return { view };
}

export default connect(mapStateToProps)(NavViewContainer);

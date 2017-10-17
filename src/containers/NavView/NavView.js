import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavView from 'components/NavView/NavView';
import switchView from 'actions/switchView';
import logout from 'actions/logout';
import { openMenu } from 'actions/menu';

class NavViewContainer extends Component {
  constructor(props) {
    super(props);

    this.switchView = this.switchView.bind(this);
    this.logout = this.logout.bind(this);
    this.openMenu = this.openMenu.bind(this);
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

  openMenu() {
    this.props.dispatch(openMenu());
  }

  render() {
    return (
      <NavView
        switchView={this.switchView}
        openMenu={this.openMenu}
        activeItem={this.props.view.view}
        myjsonId={this.props.myjsonId}
      >
        {this.props.children}
      </NavView>
    );
  }
}

NavViewContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  view: PropTypes.shape({
    view: PropTypes.string,
    props: PropTypes.object,
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  myjsonId: PropTypes.string,
};

NavViewContainer.defaultProps = {
  myjsonId: null,
};

function mapStateToProps({ view, myjsonId }) {
  return { view, myjsonId };
}

export default connect(mapStateToProps)(NavViewContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileView from 'components/ProfileView/ProfileView';
import { setNotifications } from 'actions/notifications';
import { askForPermission } from 'actions/permissions';

class ProfileViewContainer extends Component {
  constructor(props) {
    super(props);
    this.notificationChange = this.notificationChange.bind(this);
  }

  notificationChange(useNotifications) {
    if (useNotifications) {
      if (this.props.permissions === 'granted') {
        this.props.dispatch(setNotifications(true));
      } else if (this.props.permissions !== 'declined') {
        this.props.dispatch(askForPermission());
      }
    } else {
      this.props.dispatch(setNotifications(false));
    }
  }

  render() {
    return (
      <ProfileView
        myjsonId={this.props.myjsonId}
        notificationsOn={this.props.notifications}
        notificationChange={this.notificationChange}
        permissions={this.props.permissions}
      />
    );
  }
}

ProfileViewContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  myjsonId: PropTypes.string.isRequired,
  permissions: PropTypes.string,
  notifications: PropTypes.bool.isRequired,
};

ProfileViewContainer.defaultProps = {
  permissions: null,
};

function mapStateToProps({ myjsonId, permissions, notifications }) {
  return { myjsonId, permissions, notifications };
}

export default connect(mapStateToProps)(ProfileViewContainer);

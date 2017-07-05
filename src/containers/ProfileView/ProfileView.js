import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileView from 'components/ProfileView/ProfileView';
import switchView from 'actions/switchView';


class ProfileViewContainer extends Component {
  constructor(props) {
    super(props);

    this.switchView = this.switchView.bind(this);
  }

  switchView() {
    this.props.dispatch(switchView('LoopView'));
  }

  render() {
    return (
      <ProfileView
        switchView={this.switchView}
        myjsonId={this.props.myjsonId}
      />
    );
  }
}

ProfileViewContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  myjsonId: PropTypes.string.isRequired,
};

function mapStateToProps({ myjsonId }) {
  return { myjsonId };
}

export default connect(mapStateToProps)(ProfileViewContainer);

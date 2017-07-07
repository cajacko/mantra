import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileView from 'components/ProfileView/ProfileView';

const ProfileViewContainer = ({ myjsonId }) => (
  <ProfileView myjsonId={myjsonId} />
);

ProfileViewContainer.propTypes = {
  myjsonId: PropTypes.string.isRequired,
};

function mapStateToProps({ myjsonId }) {
  return { myjsonId };
}

export default connect(mapStateToProps)(ProfileViewContainer);

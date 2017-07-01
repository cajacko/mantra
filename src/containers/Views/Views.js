import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Views from 'components/Views/Views';

const ViewsContainer = ({ view }) => <Views view={view} />;

ViewsContainer.propTypes = {
  view: PropTypes.string.isRequired,
};

function mapStateToProps({ view }) {
  return { view };
}

export default connect(mapStateToProps)(ViewsContainer);

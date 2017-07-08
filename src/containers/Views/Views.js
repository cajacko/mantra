import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Views from 'components/Views/Views';

const ViewsContainer = ({ view, myjsonId }) => (
  <Views view={view.view} myjsonId={myjsonId} viewProps={view.props} />
);

ViewsContainer.propTypes = {
  view: PropTypes.shape({
    view: PropTypes.string,
    props: PropTypes.object,
  }).isRequired,
  myjsonId: PropTypes.string,
};

ViewsContainer.defaultProps = {
  myjsonId: null,
};

function mapStateToProps({ view, myjsonId }) {
  return { view, myjsonId };
}

export default connect(mapStateToProps)(ViewsContainer);

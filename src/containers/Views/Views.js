import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Views from 'components/Views/Views';

const ViewsContainer = ({ view, myjsonId, firstTime }) => (
  <Views
    view={view.view}
    myjsonId={myjsonId}
    viewProps={view.props}
    firstTime={firstTime}
  />
);

ViewsContainer.propTypes = {
  view: PropTypes.shape({
    view: PropTypes.string,
    props: PropTypes.object,
  }).isRequired,
  myjsonId: PropTypes.string,
  firstTime: PropTypes.bool.isRequired,
};

ViewsContainer.defaultProps = {
  myjsonId: null,
};

function mapStateToProps({ view, myjsonId, firstTime }) {
  return { view, myjsonId, firstTime };
}

export default connect(mapStateToProps)(ViewsContainer);

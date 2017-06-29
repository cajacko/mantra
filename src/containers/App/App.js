import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from 'components/App/App';

const AppContainer = ({ view, viewProps }) => (
  <App view={view} viewProps={viewProps} />
);

AppContainer.propTypes = {
  // eslint-disable-next-line
  viewProps: PropTypes.object,
  view: PropTypes.oneOf([
    'list',
    'edit',
  ]).isRequired,
};

AppContainer.defaultProps = {
  viewProps: {},
};

function mapStateToProps({ view }) {
  return { view: view.view, viewProps: view.props };
}

export default connect(mapStateToProps)(AppContainer);

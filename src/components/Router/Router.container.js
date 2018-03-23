import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'components/Router/Router.render';

/**
 * Pass props form the store to the views components
 * @param {string} view      The current view
 * @param {boolean} firstTime Is this the users first time opening the app
 * @return {jsx}             The jsx markup to render
 */
const RouterContainer = ({ view, firstTime }) => (
  <Router view={view.view} viewProps={view.props} firstTime={firstTime} />
);

RouterContainer.propTypes = {
  view: PropTypes.shape({
    view: PropTypes.string,
    props: PropTypes.object,
  }).isRequired,
  firstTime: PropTypes.bool.isRequired,
};

RouterContainer.defaultProps = {
  myjsonId: null,
};

/**
 * Map the state from the store to the component props
 * @param  {?string} view      The current view
 * @param  {boolean} firstTime Is this the first time opening the app
 * @return {object}           The props to map to the component
 */
function mapStateToProps({ view, firstTime }) {
  return { view, firstTime };
}

export default connect(mapStateToProps)(RouterContainer);

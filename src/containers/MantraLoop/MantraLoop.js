import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MantraLoop from 'components/MantraLoop/MantraLoop';

const MantraLoopContainer = ({ mantraLoop }) => (
  <MantraLoop mantraLoop={mantraLoop} />
);

MantraLoopContainer.propTypes = {
  mantraLoop: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps({ mantraLoop }) {
  return { mantraLoop };
}

export default connect(mapStateToProps)(MantraLoopContainer);

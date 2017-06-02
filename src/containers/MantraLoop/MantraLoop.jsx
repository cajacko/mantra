import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MantraLoop from 'components/MantraLoop/MantraLoop';

const MantraLoopContainer = ({ mantra }) => {
  return <MantraLoop mantra={mantra.mantraLoop} />;
};

MantraLoopContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ mantra }) {
  return { mantra };
}

export default connect(mapStateToProps)(MantraLoopContainer);

import React from 'react';
import { connect } from 'react-redux';
import LoopView from 'components/LoopView/LoopView';

const LoopViewContainer = props => <LoopView {...props} />;

function mapStateToProps({ mantraLoop }) {
  return { mantra: mantraLoop };
}

export default connect(mapStateToProps)(LoopViewContainer);

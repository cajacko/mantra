import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Network from 'components/Network/Network';
import sync from 'actions/sync';

class NetworkContainer extends Component {
  constructor(props) {
    super(props);
    this.sync = this.sync.bind(this);
  }

  sync() {
    this.props.dispatch(sync(this.props.items, this.props.myjsonId, true));
  }

  render() {
    return <Network sync={this.sync} />;
  }
}

NetworkContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  myjsonId: PropTypes.string.isRequired,
};

function mapStateToProps({ items, myjsonId }) {
  return { items, myjsonId };
}

export default connect(mapStateToProps)(NetworkContainer);

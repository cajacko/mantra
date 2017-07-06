import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Network from 'components/Network/Network';
import upload from 'actions/upload';
import download from 'actions/download';

class NetworkContainer extends Component {
  constructor(props) {
    super(props);
    this.download = this.download.bind(this);
    this.upload = this.upload.bind(this);
  }

  download() {
    this.props.dispatch(download(this.props.myjsonId));
  }

  upload() {
    this.props.dispatch(upload(this.props.localData, this.props.myjsonId));
  }

  render() {
    return <Network upload={this.upload} download={this.download} />;
  }
}

NetworkContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  localData: PropTypes.shape({
    items: PropTypes.object,
  }).isRequired,
  myjsonId: PropTypes.string.isRequired,
};

function mapStateToProps({ items, myjsonId }) {
  return { localData: { items }, myjsonId };
}

export default connect(mapStateToProps)(NetworkContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Mantra from 'components/Mantra/Mantra';
import deleteMantra from 'actions/deleteMantra';
import switchView from 'actions/switchView';

class MantraContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteMantra = this.deleteMantra.bind(this);
    this.editMantra = this.editMantra.bind(this);
  }

  deleteMantra() {
    this.props.dispatch(deleteMantra(this.props.id));
  }

  editMantra() {
    this.props.dispatch(switchView('AddView', {
      id: this.props.id,
      title: this.props.title,
    }));
  }

  render() {
    return (
      <Mantra
        deleteMantra={this.deleteMantra}
        title={this.props.title}
        last={this.props.last}
        online={this.props.online}
        editMantra={this.editMantra}
        rotation={this.props.rotation}
        syncing={this.props.syncLoading}
      />
    );
  }
}

MantraContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  last: PropTypes.bool,
  online: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  rotation: PropTypes.object,
  syncLoading: PropTypes.bool.isRequired,
};

MantraContainer.defaultProps = {
  last: false,
  rotation: null,
};

function mapStateToProps({ syncLoading }) {
  return { syncLoading };
}

export default connect(mapStateToProps)(MantraContainer);

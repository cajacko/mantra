import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Mantra from 'components/Mantra/Mantra';
import switchView from 'actions/switchView';
import deleteMantra from 'actions/deleteMantra';

class MantraContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { deleted: props.deleted };
    this.deleteMantra = this.deleteMantra.bind(this);
    this.editMantra = this.editMantra.bind(this);
  }

  deleteMantra() {
    this.props.dispatch(deleteMantra(this.props.id));
    this.setState({ deleted: true });
  }

  finishedProgramaticDeleteAnimation() {
    this.setState({ deleted: true });
  }

  editMantra() {
    this.props.dispatch(switchView('AddView', {
      id: this.props.id,
      title: this.props.title,
    }));
  }

  render() {
    if (this.state.deleted) {
      return null;
    }

    let syncing = false;

    if (this.props.syncLoading) {
      if (this.props.offlineItemsSyncing.includes(this.props.id)) {
        syncing = true;
      }
    }

    return (
      <Mantra
        deleteMantra={this.deleteMantra}
        title={this.props.title}
        last={this.props.last}
        online={this.props.online}
        editMantra={this.editMantra}
        rotation={this.props.rotation}
        syncing={syncing}
        initial={this.props.initial}
        deletedProp={this.props.deleted}
        deletedState={this.state.deleted}
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
  initial: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  offlineItemsSyncing: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MantraContainer.defaultProps = {
  last: false,
  rotation: null,
};

function mapStateToProps({ syncLoading, offlineItemsSyncing }) {
  return { syncLoading, offlineItemsSyncing };
}

export default connect(mapStateToProps)(MantraContainer);

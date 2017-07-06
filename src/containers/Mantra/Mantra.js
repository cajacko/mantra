import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Mantra from 'components/Mantra/Mantra';
import deleteMantra from 'actions/deleteMantra';

class MantraContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteMantra = this.deleteMantra.bind(this);
  }

  deleteMantra() {
    this.props.dispatch(deleteMantra(this.props.id));
  }

  render() {
    return (
      <Mantra
        deleteMantra={this.deleteMantra}
        title={this.props.title}
        last={this.props.last}
        online={this.props.online}
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
};

MantraContainer.defaultProps = {
  last: false,
};

export default connect()(MantraContainer);

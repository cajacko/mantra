import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditMantra from 'components/EditMantra/EditMantra';
import deleteMantra from 'actions/deleteMantra';

class EditMantraContainer extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    this.props.dispatch(deleteMantra(this.props.id));
  }

  render() {
    return (
      <EditMantra
        edit={this.edit}
        delete={this.delete}
        id={this.props.id}
      />
    );
  }
}

EditMantraContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number,
};

EditMantraContainer.defaultProps = {
  id: null,
};

export default connect()(EditMantraContainer);

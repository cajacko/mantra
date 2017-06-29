import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddButton from 'components/AddButton/AddButton';
import switchView from 'actions/switchView';

class AddButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add() {
    this.props.dispatch(switchView('edit'));
  }

  render() {
    return <AddButton add={this.add} />;
  }
}

AddButtonContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddButtonContainer);

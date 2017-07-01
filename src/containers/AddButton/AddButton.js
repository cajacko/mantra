import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddButton from 'components/AddButton/AddButton';
import switchView from 'actions/switchView';

class AddButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.switchView = this.switchView.bind(this);
  }

  switchView() {
    this.props.dispatch(switchView('AddView'));
  }

  render() {
    return <AddButton onPress={this.switchView} />;
  }
}

AddButtonContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddButtonContainer);

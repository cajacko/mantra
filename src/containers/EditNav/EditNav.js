import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditNav from 'components/EditNav/EditNav';
import switchView from 'actions/switchView';

class EditNavContainer extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }

  back() {
    this.props.dispatch(switchView('list'));
  }

  render() {
    return <EditNav back={this.back} />;
  }
}

EditNavContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(EditNavContainer);

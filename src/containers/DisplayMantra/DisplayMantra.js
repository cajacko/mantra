import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayMantra from 'components/DisplayMantra/DisplayMantra';
import switchView from 'actions/switchView';

class DisplayMantraContainer extends Component {
  constructor(props) {
    super(props);
    this.editMantra = this.editMantra.bind(this);
  }

  editMantra() {
    this.props.dispatch(switchView('AddView', {
      id: this.props.id,
      title: this.props.title,
    }));
  }

  render() {
    return (
      <DisplayMantra
        title={this.props.title}
        edit={this.editMantra}
      />
    );
  }
}

DisplayMantraContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect()(DisplayMantraContainer);

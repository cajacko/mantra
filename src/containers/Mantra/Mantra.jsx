import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Mantra from 'components/Mantra/Mantra';
import { saveMantra, deleteMantra } from 'actions/mantra';

class MantraLoopContainer extends React.Component {
  constructor(props) {
    super(props);

    this.saveMantra = this.saveMantra.bind(this);
    this.deleteMantra = this.deleteMantra.bind(this);
  }

  saveMantra(title, description) {
    this.props.dispatch(saveMantra(this.props.id, title, description));
  }

  deleteMantra() {
    this.props.dispatch(deleteMantra(this.props.id));
  }

  render() {
    return (
      <Mantra
        temp={this.props.temp}
        title={this.props.title}
        description={this.props.description}
        saveMantra={this.saveMantra}
        deleteMantra={this.deleteMantra}
      />
    );
  }
}

function mapStateToProps(state, { id }) {
  let title = 'Add new mantra here';
  let description = 'Add new mantra description here';
  const mantra = state.mantra.mantra[id];

  if (mantra) {
    title = mantra.title;
    description = mantra.description;
  }

  return { title, description };
}

export default connect(mapStateToProps)(MantraLoopContainer);

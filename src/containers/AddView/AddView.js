import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddView from 'components/AddView/AddView';
import saveMantra from 'actions/saveMantra';
import switchView from 'actions/switchView';

const characterCount = 120;

class AddViewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      enableSave: false,
      charactersLeft: characterCount,
    };

    this.onChange = this.onChange.bind(this);
    this.saveMantra = this.saveMantra.bind(this);
    this.back = this.back.bind(this);
  }

  onChange(title) {
    let enableSave = true;
    const charactersLeft = characterCount - title.length;

    if (title.length <= 3 || charactersLeft < 0) {
      enableSave = false;
    }

    this.setState({ title, enableSave, charactersLeft });
  }

  back() {
    this.props.dispatch(switchView('LoopView'));
  }

  saveMantra() {
    this.props.dispatch(saveMantra(this.state.title));
  }

  render() {
    return (
      <AddView
        saveMantra={this.saveMantra}
        title={this.state.title}
        onChange={this.onChange}
        charactersLeft={this.state.charactersLeft}
        enableSave={this.state.enableSave}
        back={this.back}
      />
    );
  }
}

AddViewContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddViewContainer);

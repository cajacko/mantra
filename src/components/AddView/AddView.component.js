import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddView from 'components/AddView/AddView.render';
import saveMantra from 'actions/saveMantra';
import switchView from 'actions/switchView';
import deleteWithAlert from 'helpers/deleteWithAlert';

const characterCount = 120;

class AddViewComponent extends Component {
  constructor(props) {
    super(props);

    let title = '';
    let enableSave = false;
    let charactersLeft = characterCount;
    let id;
    let showDelete = false;
    let item;

    if (this.props.id) {
      item = this.props.items[this.props.id];

      if (!item) {
        // eslint-disable-next-line
        console.error('Could not find item with given id', this.props);
        item = { id: this.props.id };
      }

      title = item.title;
      enableSave = true;
      charactersLeft = characterCount - title.length;
    }

    if (this.props.id) {
      id = this.props.id;
      showDelete = true;
    }

    this.state = {
      item,
      title,
      enableSave,
      charactersLeft,
      id,
      showDelete,
      shouldShowAddSource: true,
    };

    this.onChange = this.onChange.bind(this);
    this.saveMantra = this.saveMantra.bind(this);
    this.back = this.back.bind(this);
    this.deleteMantra = this.deleteMantra.bind(this);
    this.setShowAddSource = this.setShowAddSource.bind(this);
  }

  setShowAddSource(shouldShowAddSource) {
    return () => this.setState({ shouldShowAddSource });
  }

  onChange(title) {
    let enableSave = true;
    const charactersLeft = characterCount - title.length;

    if (title.length <= 3 || charactersLeft < 0) {
      enableSave = false;
    }

    this.setState({ title, enableSave, charactersLeft });
  }

  deleteMantra() {
    if (this.props.id) {
      deleteWithAlert(this.props.dispatch, this.props.id);
    }
  }

  back() {
    this.props.dispatch(switchView('LoopView'));
  }

  saveMantra() {
    this.props.dispatch(saveMantra(this.state.title, this.state.item));
  }

  render() {
    return (
      <AddView
        shouldShowAddSource={this.state.shouldShowAddSource}
        showAddSource={this.setShowAddSource(true)}
        showDelete={this.state.showDelete}
        saveMantra={this.saveMantra}
        title={this.state.title}
        onChange={this.onChange}
        charactersLeft={this.state.charactersLeft}
        enableSave={this.state.enableSave}
        back={this.back}
        deleteMantra={this.deleteMantra}
      />
    );
  }
}

AddViewComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string,
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
};

AddViewComponent.defaultProps = {
  id: null,
};

export default AddViewComponent;

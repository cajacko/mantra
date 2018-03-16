import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddView from 'components/AddView/AddView.render';

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
      shouldShowAddSource: false,
      source: {},
    };

    this.saveMantra = this.saveMantra.bind(this);
    this.onChange = this.onChange.bind(this);
    this.deleteMantra = this.deleteMantra.bind(this);
    this.setShowAddSource = this.setShowAddSource.bind(this);
    this.saveSource = this.saveSource.bind(this);
  }

  onChange(title) {
    let enableSave = true;
    const charactersLeft = characterCount - title.length;

    if (title.length <= 3 || charactersLeft < 0) {
      enableSave = false;
    }

    this.setState({ title, enableSave, charactersLeft });
  }

  setShowAddSource(shouldShowAddSource) {
    return () => this.setState({ shouldShowAddSource });
  }

  deleteMantra() {
    if (this.props.id) {
      this.props.deleteMantra(this.props.id);
    }
  }

  saveMantra() {
    this.props.saveMantra({
      title: this.state.title,
      source: this.state.source,
      item: this.state.item,
    });
  }

  saveSource(title, link) {
    this.setState({ source: { title, link }, shouldShowAddSource: false });
  }

  render() {
    return (
      <AddView
        shouldShowAddSource={this.state.shouldShowAddSource}
        setShowAddSource={this.setShowAddSource}
        showDelete={this.state.showDelete}
        saveMantra={this.saveMantra}
        title={this.state.title}
        onChange={this.onChange}
        charactersLeft={this.state.charactersLeft}
        enableSave={this.state.enableSave}
        back={this.props.back}
        deleteMantra={this.deleteMantra}
        saveSource={this.saveSource}
        source={this.state.source}
      />
    );
  }
}

AddViewComponent.propTypes = {
  back: PropTypes.func.isRequired,
  deleteMantra: PropTypes.func.isRequired,
  saveMantra: PropTypes.func.isRequired,
  id: PropTypes.string,
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
};

AddViewComponent.defaultProps = {
  id: null,
};

export default AddViewComponent;

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
    let source = {};

    if (props.id) {
      item = props.items[props.id];

      if (!item) {
        // eslint-disable-next-line
        console.error('Could not find item with given id', props);
        item = { id: props.id };
      }

      title = item.title;
      enableSave = true;
      charactersLeft = characterCount - title.length;
      id = props.id;
      showDelete = true;

      if (item.source) {
        source = props.sources[item.source];

        if (!source) {
          // eslint-disable-next-line
          console.error('Could not find a source with the given id', props);
          source = {};
        }
      }
    }

    this.state = {
      item,
      title,
      enableSave,
      charactersLeft,
      id,
      showDelete,
      shouldShowAddSource: false,
      source,
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
  // eslint-disable-next-line
  sources: PropTypes.object.isRequired,
};

AddViewComponent.defaultProps = {
  id: null,
};

export default AddViewComponent;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overview from 'components/scenes/Add/Overview/Overview.render';
import getSource from 'components/scenes/Add/Overview/helpers/getSource';
import getItem from 'components/scenes/Add/Overview/helpers/getItem';
import characterCount from 'constants/characterCount';
import getOrderedSources from 'helpers/getOrderedSources';
import saveSource from 'components/scenes/Add/Overview/helpers/saveSource';

class OverviewComponent extends Component {
  constructor(props) {
    super(props);

    const orderedSources = getOrderedSources(props.sources);

    this.state = {
      ...getItem(props),
      shouldShowAddSource: false,
      source: getSource(props, orderedSources, props.prefillSource),
      orderedSources,
    };

    this.saveMantra = this.saveMantra.bind(this);
    this.onChange = this.onChange.bind(this);
    this.deleteMantra = this.deleteMantra.bind(this);
    this.setShowAddSource = this.setShowAddSource.bind(this);
    this.saveSource = this.saveSource.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ orderedSources: getOrderedSources(props.sources) });
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

  saveSource(title, link, id) {
    saveSource(
      (state) => {
        this.setState(state);
      },
      this.props.sources,
      title,
      link,
      id
    );
  }

  render() {
    return (
      <Overview
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
        orderedSources={this.state.orderedSources}
      />
    );
  }
}

OverviewComponent.propTypes = {
  back: PropTypes.func.isRequired,
  prefillSource: PropTypes.bool.isRequired,
  deleteMantra: PropTypes.func.isRequired,
  saveMantra: PropTypes.func.isRequired,
  id: PropTypes.string,
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  // eslint-disable-next-line
  sources: PropTypes.object.isRequired,
};

OverviewComponent.defaultProps = {
  id: null,
};

export default OverviewComponent;

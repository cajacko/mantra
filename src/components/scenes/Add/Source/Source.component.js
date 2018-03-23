import React, { PureComponent } from 'react';
import SceneAddSource from 'components/scenes/Add/Source/Source.render';
import PropTypes from 'prop-types';
import isValidForSave from 'components/scenes/Add/Source/helpers/isValidForSave';

class SceneAddSourceComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.defaultErrorState = {
      linkError: false,
      titleError: false,
      errorMessage: null,
    };

    this.state = {
      id: props.id,
      title: props.title,
      link: props.link,
      ...this.defaultErrorState,
    };

    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
    this.clear = this.clear.bind(this);
    this.addSuggestion = this.addSuggestion.bind(this);
  }

  onChange(key) {
    return value => this.setState({ [key]: value, ...this.defaultErrorState });
  }

  isValidForSave() {
    return isValidForSave(
      this.state,
      (state) => {
        this.setState(state);
      },
      this.defaultErrorState
    );
  }

  save() {
    if (!this.isValidForSave()) return;

    this.props.save(this.state.title, this.state.link, this.state.id);
  }

  clear() {
    this.setState({ link: '', title: '', id: null });
  }

  addSuggestion(id, title, link) {
    return () => this.props.save(title, link, id);
  }

  render() {
    const areInputsSame =
      this.props.title === this.state.title &&
      this.props.link === this.state.link;

    return (
      <SceneAddSource
        errorMessage={this.state.errorMessage}
        linkError={this.state.linkError}
        titleError={this.state.titleError}
        title={this.state.title}
        link={this.state.link}
        onChange={this.onChange}
        goBack={this.props.goBack}
        save={this.save}
        clear={this.clear}
        suggestions={this.props.orderedSources}
        addSuggestion={this.addSuggestion}
        areInputsSame={areInputsSame}
      />
    );
  }
}

SceneAddSourceComponent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  orderedSources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

SceneAddSourceComponent.defaultProps = {
  id: null,
  title: '',
  link: null,
};

export default SceneAddSourceComponent;

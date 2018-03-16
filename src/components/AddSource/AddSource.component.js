import React, { PureComponent } from 'react';
import AddSource from 'components/AddSource/AddSource.render';
import PropTypes from 'prop-types';
import toast from 'helpers/toast';
import isUrl from 'is-url';

class AddSourceComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.defaultErrorState = {
      linkError: false,
      titleError: false,
      errorMessage: null,
    };

    this.state = {
      title: props.title,
      link: props.link,
      ...this.defaultErrorState,
    };

    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
    this.clear = this.clear.bind(this);
  }

  onChange(key) {
    return value => this.setState({ [key]: value, ...this.defaultErrorState });
  }

  isValidForSave() {
    const { link, title } = this.state;

    const errorState = Object.assign({}, this.defaultErrorState);
    let errorMessage = null;

    if (!title.length && !link.length) {
      return true;
    }

    if (title.length && !link.length) {
      errorState.linkError = true;
      errorMessage = 'Add a link for this title';
    } else if (link.length && !title.length) {
      errorState.titleError = true;
      errorMessage = 'Add a title for this link';
    }

    if (link.length && !isUrl(link)) {
      errorState.linkError = true;
      errorMessage = errorMessage ? `${errorMessage}. ` : '';
      errorMessage = `${errorMessage}Link is not a valid URL`;
    }

    this.setState(errorState);

    if (errorMessage) {
      toast(errorMessage, 'warning');
    }

    return false;
  }

  save() {
    if (!this.isValidForSave()) return;

    this.props.save(this.state.title, this.state.link);
  }

  clear() {
    this.setState({ link: '', title: '' });
  }

  render() {
    return (
      <AddSource
        errorMessage={this.state.errorMessage}
        linkError={this.state.linkError}
        titleError={this.state.titleError}
        title={this.state.title}
        link={this.state.link}
        onChange={this.onChange}
        goBack={this.props.goBack}
        save={this.save}
        clear={this.clear}
      />
    );
  }
}

AddSourceComponent.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};

AddSourceComponent.defaultProps = {
  title: '',
  link: '',
};

export default AddSourceComponent;

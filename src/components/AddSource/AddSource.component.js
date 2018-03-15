import React, { PureComponent } from 'react';
import AddSource from 'components/AddSource/AddSource.render';
import PropTypes from 'prop-types';

class AddSourceComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      link: props.link,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(key) {
    return value => this.setState({ [key]: value });
  }

  render() {
    return (
      <AddSource
        title={this.state.title}
        link={this.state.link}
        onChange={this.onChange}
        goBack={this.props.goBack}
      />
    );
  }
}

AddSourceComponent.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  goBack: PropTypes.func.isRequired,
};

AddSourceComponent.defaultProps = {
  title: '',
  link: '',
};

export default AddSourceComponent;

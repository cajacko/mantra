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

    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.save = this.save.bind(this);
  }

  onChangeLink(link) {
    this.setState({ link });
  }

  onChangeTitle(title) {
    this.setState({ title });
  }

  save() {
    this.props.save(this.state.title, this.state.link);
  }

  render() {
    return (
      <AddSource
        title={this.state.title}
        link={this.state.link}
        onChangeLink={this.onChangeLink}
        onChangeTitle={this.onChangeTitle}
        goBack={this.props.goBack}
        save={this.save}
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

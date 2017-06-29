import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Mantra from 'components/Mantra/Mantra';
import switchView from 'actions/switchView';
import deleteMantra from 'actions/deleteMantra';

class MantraContainer extends Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  edit() {
    this.props.dispatch(switchView('edit', { id: this.props.id }));
  }

  delete() {
    this.props.dispatch(deleteMantra(this.props.id));
  }

  render() {
    return (
      <Mantra
        edit={this.edit}
        delete={this.delete}
        title={this.props.title}
        links={this.props.links}
        description={this.props.description}
        showContent={this.props.showContent}
        id={this.props.id}
      />
    );
  }
}

MantraContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
  description: PropTypes.string.isRequired,
  showContent: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

MantraContainer.defaultProps = {
  showContent: false,
};

export default connect()(MantraContainer);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoopView from 'containers/LoopView/LoopView';
import EditView from 'components/EditView/EditView';

class App extends Component {
  constructor() {
    super();

    this.state = { view: 'loop', props: {} };

    this.switchView = this.switchView.bind(this);
  }

  switchView(view, props = {}) {
    this.setState({ view, props });
  }

  render() {
    if (this.props.view === 'edit') {
      return (
        <EditView switchView={this.switchView} {...this.props.viewProps} />
      );
    }

    return <LoopView switchView={this.switchView} {...this.props.viewProps} />;
  }
}

App.propTypes = {
  // eslint-disable-next-line
  viewProps: PropTypes.object,
  view: PropTypes.oneOf([
    'list',
    'edit',
  ]).isRequired,
};

App.defaultProps = {
  viewProps: {},
};

export default App;

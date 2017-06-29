import React, { Component } from 'react';
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
    if (this.state.view === 'edit') {
      return <EditView switchView={this.switchView} {...this.state.props} />;
    }

    return <LoopView switchView={this.switchView} {...this.state.props} />;
  }
}

export default App;

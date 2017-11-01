import React, { PureComponent } from 'react';
import LoopViewRender from 'components/LoopView/LoopView.render';

class LoopView extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { searchValue: null };

    this.searchChange = this.searchChange.bind(this);
  }

  searchChange(searchValue) {
    this.setState({ searchValue: searchValue === '' ? null : searchValue });
  }

  render() {
    return (
      <LoopViewRender
        searchValue={this.state.searchValue}
        searchChange={this.searchChange}
      />
    );
  }
}

export default LoopView;

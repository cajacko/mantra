import React, { PureComponent } from 'react';
import LoopViewRender from 'components/LoopView/LoopView.render';

class LoopView extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { searchValue: null };

    this.searchButton = this.searchButton.bind(this);
    this.searchChange = this.searchChange.bind(this);
  }

  searchButton() {
    if (this.state.searchValue) {
      this.setState({ searchValue: null });
    }
  }

  searchChange(searchValue) {
    this.setState({ searchValue: searchValue === '' ? null : searchValue });
  }

  render() {
    return (
      <LoopViewRender
        searchValue={this.state.searchValue}
        searchButton={this.searchButton}
        searchChange={this.searchChange}
        searchIcon={this.state.searchValue ? 'ios-close' : 'ios-search'}
      />
    );
  }
}

export default LoopView;

import React, { PureComponent } from 'react';
import LoopViewRender from 'components/LoopView/LoopView.render';

/**
 * Logic for the loop view. Shows a list of mantra items and a search bar that
 * can filter them.
 *
 * @type {Class}
 */
class LoopView extends PureComponent {
  /**
   * Initialist the component, set the initial state and bind the methods
   *
   * @param  {Object} props Props passed to the component
   * @return {Void}       No return value
   */
  constructor(props) {
    super(props);

    this.state = { searchValue: null };

    this.searchChange = this.searchChange.bind(this);
  }

  /**
   * Update the state with the search text when it changes. Will be passed to
   * mantra loop
   *
   * @param  {String} searchValue The search text to filter by
   * @return {Void}             No return value
   */
  searchChange(searchValue) {
    this.setState({ searchValue: searchValue === '' ? null : searchValue });
  }

  /**
   * Render the component
   *
   * @return {Component} React component to render
   */
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

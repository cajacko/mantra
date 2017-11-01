import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import MantraLoop from 'components/MantraLoop/MantraLoop.container';
import style from 'components/LoopView/LoopView.style';
import EmptyView from 'containers/EmptyView/EmptyView';
import Search from 'components/Search/Search.component';

/**
 * Render the loop view. Displays a search bar and list of mantra
 *
 * @type {Class}
 */
class LoopViewRender extends PureComponent {
  /**
   * Render the component
   *
   * @return {component} React component to render
   */
  render() {
    return (
      <EmptyView>
        <View style={style.container}>
          <Search onChange={this.props.searchChange} />
          <MantraLoop filterValue={this.props.searchValue} />
        </View>
      </EmptyView>
    );
  }
}

LoopViewRender.propTypes = {
  searchValue: PropTypes.string,
  searchChange: PropTypes.func.isRequired,
};

LoopViewRender.defaultProps = {
  searchValue: null,
};

export default LoopViewRender;

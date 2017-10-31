import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import MantraLoop from 'components/MantraLoop/MantraLoop.container';
import style from 'components/LoopView/LoopView.style';
import EmptyView from 'containers/EmptyView/EmptyView';
import Search from 'components/Search/Search.render';

class LoopViewRender extends PureComponent {
  render() {
    return (
      <EmptyView>
        <View style={style.container}>
          <Search
            value={this.props.searchValue}
            icon={this.props.searchIcon}
            buttonAction={this.props.searchButton}
            onChange={this.props.searchChange}
          />
          <MantraLoop filterValue={this.props.searchValue} />
        </View>
      </EmptyView>
    );
  }
}

LoopViewRender.propTypes = {
  searchValue: PropTypes.string,
  searchButton: PropTypes.func.isRequired,
  searchChange: PropTypes.func.isRequired,
  searchIcon: PropTypes.string.isRequired,
};

LoopViewRender.defaultProps = {
  searchValue: null,
};

export default LoopViewRender;

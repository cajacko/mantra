import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'components/LoopView/LoopView.style';
import Mantra from 'containers/Mantra/Mantra';
import Item from 'containers/Item/Item';
import AddButton from 'containers/AddButton/AddButton';

class LoopView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = { dataSource: ds.cloneWithRows(this.props.mantra) };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={id => (
            <Item
              key={id}
              itemId={id}
              element={Mantra}
              switchView={this.props.switchView}
            />
          )}
        />
        <AddButton />
      </View>
    );
  }
}

LoopView.propTypes = {
  switchView: PropTypes.func.isRequired,
  mantra: PropTypes.arrayOf(PropTypes.number),
};

LoopView.defaultProps = {
  mantra: [],
};

export default LoopView;

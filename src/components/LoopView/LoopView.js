import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, ListView } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'components/LoopView/LoopView.style';
import Mantra from 'components/Mantra/Mantra';
import Item from 'containers/Item/Item';

class LoopView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(this.props.mantra),
      addHighlight: false,
    };

    this.add = this.add.bind(this);
    this.addOn = this.addOn.bind(this);
    this.addOff = this.addOff.bind(this);
  }

  add() {
    this.props.switchView('edit', { add: true });
  }

  addOn() {
    this.setState({ addHighlight: true });
  }

  addOff() {
    this.setState({ addHighlight: false });
  }

  render() {
    const addButtonStyles = [styles.addButton];

    if (this.state.addHighlight) {
      addButtonStyles.push(styles.addButtonHighlight);
    }

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
        <TouchableWithoutFeedback
          onPress={this.add}
          onPressIn={this.addOn}
          onPressOut={this.addOff}
        >
          <View style={addButtonStyles}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableWithoutFeedback>
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

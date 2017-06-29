import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'components/LoopView/LoopView.style';

class LoopView extends Component {
  constructor(props) {
    super(props);

    this.state = { addHighlight: false };

    this.addOn = this.addOn.bind(this);
    this.addOff = this.addOff.bind(this);
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
      <TouchableWithoutFeedback
        onPress={this.props.add}
        onPressIn={this.addOn}
        onPressOut={this.addOff}
      >
        <View style={addButtonStyles}>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

LoopView.propTypes = {
  add: PropTypes.func.isRequired,
};

export default LoopView;

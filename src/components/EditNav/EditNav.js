import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from 'constants/styles';

class EditNav extends Component {
  render() {
    return (
      <View style={styles.editNav}>
        <TouchableWithoutFeedback onPress={() => this.props.switchView('loop')} onPressIn={this.addOn} onPressOut={this.addOff}>
          <View>
            <Text style={styles.editNavText}>Back</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.props.switchView('loop')} onPressIn={this.addOn} onPressOut={this.addOff}>
          <View>
            <Text style={styles.editNavText}>Save</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default EditNav;

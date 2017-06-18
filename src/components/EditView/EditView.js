import React, { Component } from 'react';
import { View } from 'react-native';
import styles from 'constants/styles';
import EditMantra from 'components/EditMantra/EditMantra';
import EditNav from 'components/EditNav/EditNav';

class EditView extends Component {
  render() {
    return (
      <View style={styles.edit}>
        <EditNav switchView={this.props.switchView} />
        <EditMantra />
      </View>
    )
  }
}

export default EditView;

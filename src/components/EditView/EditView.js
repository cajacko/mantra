import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'constants/styles';
import EditMantra from 'components/EditMantra/EditMantra';
import EditNav from 'components/EditNav/EditNav';

const EditView = props => (
  <View style={styles.edit}>
    <EditNav switchView={props.switchView} />
    <EditMantra switchView={props.switchView} />
  </View>
);

EditView.propTypes = {
  switchView: PropTypes.func.isRequired,
};

export default EditView;

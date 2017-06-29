import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'components/EditView/EditView.style';
import EditMantra from 'containers/EditMantra/EditMantra';
import EditNav from 'containers/EditNav/EditNav';

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

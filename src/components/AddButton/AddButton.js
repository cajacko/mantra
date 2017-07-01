import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const AddButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text>+</Text>
    </View>
  </TouchableOpacity>
);

AddButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default AddButton;

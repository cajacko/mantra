import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import NetworkButton from 'components/NetworkButton/NetworkButton';
import style from 'components/Network/Network.style';

const Network = ({ sync }) => (
  <View style={style.container}>
    <NetworkButton action={sync} text="Sync" />
  </View>
);

Network.propTypes = {
  sync: PropTypes.func.isRequired,
};

export default Network;

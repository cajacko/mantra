import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import NetworkButton from 'components/NetworkButton/NetworkButton';
import style from 'components/Network/Network.style';

const Network = ({ upload, download }) => (
  <View style={style.container}>
    <NetworkButton action={upload} text="Upload" />
    <NetworkButton action={download} text="Download" />
  </View>
);

Network.propTypes = {
  upload: PropTypes.func.isRequired,
  download: PropTypes.func.isRequired,
};

export default Network;

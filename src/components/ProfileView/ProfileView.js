import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text } from 'react-native';
import style from 'components/ProfileView/ProfileView.style';

const description = 'Record this for later. You use this ID to login to your account. If you lose this ID you will not be able to retrieve your Mantra when you delete this app or download the app on another device.';

const ProfileView = ({ myjsonId }) => (
  <View style={style.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={style.title}>Profile</Text>
    <View style={style.wrapper}>
      <View style={style.content}>
        <Text style={style.intro}>This is your Account ID</Text>
        <Text style={style.id}>{myjsonId}</Text>
        <Text style={style.description}>{description}</Text>
      </View>
    </View>
  </View>
);

ProfileView.propTypes = {
  myjsonId: PropTypes.string.isRequired,
};

export default ProfileView;

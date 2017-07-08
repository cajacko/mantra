import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text, Switch } from 'react-native';
import style from 'components/ProfileView/ProfileView.style';

const description = 'Record this for later. You use this ID to login to your account. If you lose this ID you will not be able to retrieve your Mantra when you delete this app or download the app on another device.';
const disabledText = 'Notifications have been disabled, to reanable them, go to ios settings -> notifications -> Mantra and reenable them';

const ProfileView = ({
  myjsonId,
  notificationsOn,
  notificationChange,
  permissions,
}) => {
  let disabled = false;
  let disabledTextElement;
  let switchOn = notificationsOn;

  if (permissions === 'declined') {
    disabled = true;
    disabledTextElement = <Text>{disabledText}</Text>;
    switchOn = false;
  }

  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={style.title}>Profile</Text>
      <View style={style.wrapper}>
        <View style={style.content}>
          <Text style={style.intro}>This is your Account ID</Text>
          <Text style={style.id}>{myjsonId}</Text>
          <Text style={style.description}>{description}</Text>
        </View>
        <View style={style.reminders}>
          <Text style={style.reminderText}>Enable a daily mantra reminder at 7am</Text>
          <Switch
            value={switchOn}
            disabled={disabled}
            onValueChange={notificationChange}
          />
          {disabledTextElement}
        </View>
      </View>
    </View>
  );
};

ProfileView.propTypes = {
  myjsonId: PropTypes.string.isRequired,
  notificationChange: PropTypes.func.isRequired,
  notificationsOn: PropTypes.bool.isRequired,
  permissions: PropTypes.string,
};

ProfileView.defaultProps = {
  permissions: null,
};

export default ProfileView;

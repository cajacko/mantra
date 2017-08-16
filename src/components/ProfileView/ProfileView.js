import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text } from 'react-native';
import style from 'components/ProfileView/ProfileView.style';
import ReminderTime from 'components/ReminderTime/ReminderTime';

const description = 'Record this for later. You use this ID to login to your account. If you lose this ID you will not be able to retrieve your Mantra when you delete this app or download the app on another device.';
const disabledText = 'Notifications have been disabled, to reanable them, go to ios settings -> notifications -> Mantra and reenable them';
const reminderTimes = [7, 12, 18];

const ProfileView = ({
  myjsonId,
  notifications,
  notificationChange,
  permissions,
}) => {
  let disabled = false;
  let disabledTextElement;

  if (permissions === 'declined') {
    disabled = true;
    disabledTextElement = (
      <Text style={style.disabledText}>{disabledText}</Text>
    );
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
        <View style={style.remindersContainer}>
          <Text style={style.remindersDescription}>
            Enable a daily mantra reminder at
          </Text>

          <View>
            {
              reminderTimes.map((reminder) => {
                let time;

                if (reminder === 12) {
                  time = '12pm';
                } else if (reminder > 12) {
                  time = `${reminder - 12}pm`;
                } else {
                  time = `${reminder}am`;
                }

                const switchOn = notifications[reminder] || false;

                return (
                  <ReminderTime
                    key={reminder}
                    time={time}
                    disabled={disabled}
                    switchOn={switchOn}
                    value={`${reminder}`}
                    notificationChange={notificationChange}
                  />
                );
              })
            }
          </View>
          {disabledTextElement}
        </View>
      </View>
    </View>
  );
};

ProfileView.propTypes = {
  myjsonId: PropTypes.string.isRequired,
  notificationChange: PropTypes.func.isRequired,
  // eslint-disable-next-line
  notifications: PropTypes.object.isRequired,
  permissions: PropTypes.string,
};

ProfileView.defaultProps = {
  permissions: null,
};

export default ProfileView;

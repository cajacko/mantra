import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Switch } from 'react-native';
import style from 'components/ReminderTime/ReminderTime.style';

const ReminderTime = ({
  switchOn,
  disabled,
  notificationChange,
  time,
  value,
}) => (
  <View style={style.reminders}>
    <Text style={style.reminderText}>{time}</Text>
    <Switch
      value={switchOn}
      disabled={disabled}
      onValueChange={event => notificationChange(event, value)}
    />
  </View>
);

ReminderTime.propTypes = {
  disabled: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  notificationChange: PropTypes.func.isRequired,
  switchOn: PropTypes.bool.isRequired,
};

export default ReminderTime;

import { StyleSheet } from 'react-native';
import { TEXT_SIZES } from 'constants/text';

export default StyleSheet.create({
  reminders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 120,
    marginTop: 10,
  },

  reminderText: {
    fontSize: TEXT_SIZES.MEDIUM,
  },
});

import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
  editNav: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#dedede',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#cecece',
  },

  editNavText: {
    fontSize: 20,
    padding: 10,
  },
});

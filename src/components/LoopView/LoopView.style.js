import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { WHITE } from 'constants/colours';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: WHITE,
  },
});

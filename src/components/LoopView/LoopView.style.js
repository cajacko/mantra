import { StyleSheet } from 'react-native';
import statusBarHeight from 'helpers/statusBarHeight';
import { WHITE } from 'constants/colours';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight(),
    backgroundColor: WHITE,
  },
});

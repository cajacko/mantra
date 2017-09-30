import statusBarHeight from 'helpers/statusBarHeight';
import { WHITE } from 'constants/colours';

export default {
  container: {
    flex: 1,
    paddingTop: statusBarHeight(),
    backgroundColor: WHITE,
  },
};

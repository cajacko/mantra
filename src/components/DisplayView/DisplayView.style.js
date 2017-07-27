import statusBarHeight from 'helpers/statusBarHeight';
import { WHITE } from 'constants/colours';
import { ICON_SIZE } from 'components/DisplayNav/DisplayNav.style';

export default {
  container: {
    flex: 1,
    paddingTop: statusBarHeight(),
    backgroundColor: WHITE,
  },

  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: ICON_SIZE,
    paddingRight: ICON_SIZE,
  },
};

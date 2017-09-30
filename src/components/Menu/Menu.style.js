import { GREY_DARKER, WHITE, GREY_DARKEST } from 'constants/colours';
import { TEXT_SIZES } from 'constants/text';
import statusBarHeight from 'helpers/statusBarHeight';

export default {
  container: {
    flex: 1,
    backgroundColor: GREY_DARKER,
  },

  header: {
    paddingTop: statusBarHeight(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GREY_DARKEST,
    paddingBottom: 10,
  },

  title: {
    color: WHITE,
    fontSize: TEXT_SIZES.MEDIUM,
  },

  menuItems: {
    flex: 1,
  },
};

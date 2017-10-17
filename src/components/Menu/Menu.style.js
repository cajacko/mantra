import { GREY_DARKER, WHITE, GREY_DARKEST } from 'constants/colours';
import { TEXT_SIZES } from 'constants/text';
import statusBarHeight from 'helpers/statusBarHeight';

const headerTop = statusBarHeight();

export default {
  container: {
    flex: 1,
    backgroundColor: GREY_DARKER,
  },

  header: {
    paddingTop: headerTop,
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

  closeWrapper: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    top: headerTop,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeColour: WHITE,
  closeSize: 30,
};

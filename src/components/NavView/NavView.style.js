import {
  GREY_LIGHT,
  GREY_LIGHTER,
  WHITE,
  YELLOW,
  YELLOW_HIGHLIGHT,
  BLACK,
} from 'constants/colours';
import { CONTENT_HEIGHT } from 'components/NavButton/NavButton.style';
import statusBarHeight from 'helpers/statusBarHeight';
import { TEXT_SIZES } from 'constants/text';

export default {
  container: {
    flex: 1,
  },

  bannerContainer: {
    paddingTop: statusBarHeight(),
    backgroundColor: WHITE,
  },

  banner: {
    backgroundColor: YELLOW,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: YELLOW_HIGHLIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },

  bannerText: {
    textAlign: 'center',
    fontSize: TEXT_SIZES.MICRO,
  },

  bannerButton: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: GREY_LIGHT,
    borderRadius: 5,
    padding: 5,
    shadowColor: BLACK,
    shadowOpacity: 0.2,
    shadowOffset: { width: -1, height: 1 },
    shadowRadius: 2,
    marginRight: 10,
  },

  bannerButtonText: {
    textAlign: 'center',
    fontSize: TEXT_SIZES.MICRO,
  },

  childrenWithPadding: {
    flex: 1,
    paddingTop: statusBarHeight(),
    backgroundColor: WHITE,
  },

  children: {
    flex: 1,
    backgroundColor: WHITE,
  },

  nav: {
    height: CONTENT_HEIGHT + (CONTENT_HEIGHT * 0.4),
    flexDirection: 'row',
    backgroundColor: GREY_LIGHTER,
    borderColor: GREY_LIGHT,
    borderTopWidth: 1,
  },
};

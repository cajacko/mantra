import statusBarHeight from 'helpers/statusBarHeight';
import { WHITE, YELLOW, YELLOW_HIGHLIGHT, BLACK } from 'constants/colours';
import { TEXT_SIZES } from 'constants/text';

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
  },

  wrapperNone: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  noneMessage: {
    fontSize: TEXT_SIZES.MEDIUM,
  },

  addButton: {
    marginTop: 20,
  },

  addButtonWrapper: {
    backgroundColor: YELLOW,
    borderColor: YELLOW_HIGHLIGHT,
    borderWidth: 2,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    shadowOffset: { width: -2, height: 2 },
    shadowColor: BLACK,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 30,
    maxWidth: 300,
  },

  addButtonText: {
    fontSize: TEXT_SIZES.MEDIUM,
  },
};

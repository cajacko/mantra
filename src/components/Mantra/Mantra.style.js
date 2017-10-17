import { TEXT_SIZES } from 'constants/text';
import { HORIZONTAL_VIEW_SPACING } from 'constants/spacing';
import {
  WHITE,
  GREY_LIGHT,
  GREY,
  GREY_LIGHTER,
  BLACK,
  BLUE,
} from 'constants/colours';

const horizontalSpacing = HORIZONTAL_VIEW_SPACING;
const verticalSpacing = 20;
const iconSize = 20;
const addDiscardMargin = 10;

export default {
  container: {
    borderBottomWidth: 1,
    borderColor: GREY_LIGHT,
    backgroundColor: WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  wrapper: {
    paddingLeft: horizontalSpacing,
    paddingRight: horizontalSpacing,
    paddingTop: verticalSpacing,
    paddingBottom: verticalSpacing,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  text: {
    fontSize: TEXT_SIZES.MEDIUM,
    flex: 1,
  },

  icon: {
    height: iconSize,
    overflow: 'hidden',
  },

  iconHide: {
    opacity: 0,
  },

  iconSize,
  iconColour: GREY,
  iconColourSyncing: BLUE,
  deleteBackground: GREY_LIGHT,
  editBackground: GREY_LIGHTER,
  buttonColour: BLACK,

  discard: {
    marginLeft: addDiscardMargin,
    marginRight: horizontalSpacing,
  },

  add: {
    marginRight: addDiscardMargin,
    marginLeft: horizontalSpacing,
  },
};

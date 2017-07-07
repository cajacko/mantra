import { TEXT_SIZES } from 'constants/text';
import { HORIZONTAL_VIEW_SPACING } from 'constants/spacing';
import { WHITE, GREY_LIGHT, GREY } from 'constants/colours';

const horizontalSpacing = HORIZONTAL_VIEW_SPACING;
const verticalSpacing = 20;

export default {
  container: {
    borderTopWidth: 1,
    borderColor: GREY_LIGHT,
    backgroundColor: WHITE,
  },

  wrapper: {
    paddingLeft: horizontalSpacing,
    paddingRight: horizontalSpacing,
    paddingTop: verticalSpacing,
    paddingBottom: verticalSpacing,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: TEXT_SIZES.MEDIUM,
    flex: 1,
  },

  last: {
    borderBottomWidth: 1,
  },

  icon: {},
  iconSize: 20,
  iconColour: GREY,
};

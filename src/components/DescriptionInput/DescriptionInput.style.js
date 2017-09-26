import { TEXT_SIZES, TEXT_COLOURS } from 'constants/text';
import { HORIZONTAL_VIEW_SPACING } from 'constants/spacing';

const verticalSpacing = 20;
const horizontalSpacing = HORIZONTAL_VIEW_SPACING;

export default {
  container: {
    backgroundColor: 'blue',
    paddingLeft: horizontalSpacing,
    paddingRight: horizontalSpacing,
    paddingTop: verticalSpacing,
    paddingBottom: verticalSpacing,
  },

  text: {
    fontSize: TEXT_SIZES.SMALL,
    color: TEXT_COLOURS.GREY_DARK,
    minHeight: 100,
  },

  placeholderColor: TEXT_COLOURS.GREY,
};

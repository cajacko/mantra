import { TEXT_SIZES, TEXT_COLOURS } from 'constants/text';
import SPACING from 'constants/spacing';

const verticalSpacing = 20;
const horizontalSpacing = SPACING;

export default {
  container: {
    paddingLeft: horizontalSpacing,
    paddingRight: horizontalSpacing,
    paddingTop: verticalSpacing,
    paddingBottom: verticalSpacing,
  },

  text: {
    fontSize: TEXT_SIZES.MEDIUM,
  },

  placeholderColor: TEXT_COLOURS.GREY,
};

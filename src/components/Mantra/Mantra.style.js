import { BOTTOM_OFFSET } from 'components/AddButton/AddButton.style';
import { TEXT_SIZES } from 'constants/text';
import SPACING from 'constants/spacing';
import { WHITE, GREY_LIGHT } from 'constants/colours';

const horizontalSpacing = SPACING;
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
  },

  text: {
    fontSize: TEXT_SIZES.MEDIUM,
  },

  last: {
    marginBottom: BOTTOM_OFFSET,
    borderBottomWidth: 1,
  },
};

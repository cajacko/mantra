import { BOTTOM_OFFSET } from 'components/AddButton/AddButton.style';
import { TEXT_SIZES } from 'constants/text';
import SPACING from 'constants/spacing';

const horizontalSpacing = SPACING;
const verticalSpacing = 20;

export default {
  container: {
    paddingLeft: horizontalSpacing,
    paddingRight: horizontalSpacing,
    paddingTop: verticalSpacing,
    paddingBottom: verticalSpacing,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
  },

  text: {
    fontSize: TEXT_SIZES.MEDIUM,
  },

  last: {
    marginBottom: BOTTOM_OFFSET,
    borderBottomWidth: 1,
  },
};

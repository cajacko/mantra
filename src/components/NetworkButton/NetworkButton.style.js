import { HORIZONTAL_VIEW_SPACING } from 'constants/spacing';
import { TEXT_SIZES } from 'constants/text';
import { BLACK, GREY_LIGHT } from 'constants/colours';

export default {
  button: {
    backgroundColor: GREY_LIGHT,
    marginLeft: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: GREY_LIGHT,
    shadowOffset: { width: -2, height: 2 },
    shadowColor: BLACK,
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  text: {
    fontSize: TEXT_SIZES.MEDIUM,
    paddingLeft: HORIZONTAL_VIEW_SPACING * 2,
    paddingTop: HORIZONTAL_VIEW_SPACING,
    paddingBottom: HORIZONTAL_VIEW_SPACING,
    paddingRight: HORIZONTAL_VIEW_SPACING * 2,
  },
};

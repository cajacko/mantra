import { TEXT_SIZES, TEXT_COLOURS } from 'constants/text';
import { HORIZONTAL_VIEW_SPACING } from 'constants/spacing';
import { GREY_LIGHTER, GREY_LIGHT } from 'constants/colours';

const verticalSpacing = 10;
const horizontalSpacing = HORIZONTAL_VIEW_SPACING;
const placeholderColor = TEXT_COLOURS.GREY;

export default {
  container: {
    paddingLeft: horizontalSpacing,
    backgroundColor: GREY_LIGHTER,
    borderColor: GREY_LIGHT,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: horizontalSpacing,
    paddingLeft: 20,
    paddingTop: verticalSpacing,
    paddingBottom: verticalSpacing,
  },

  input: {
    fontSize: TEXT_SIZES.SMALL,
    paddingTop: verticalSpacing,
    paddingBottom: verticalSpacing,
    flex: 1,
  },

  placeholderColor,

  iconSize: 20,
  iconColour: placeholderColor,
};

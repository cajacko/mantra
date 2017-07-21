import { GREY, BLUE } from 'constants/colours';
import { TEXT_SIZES } from 'constants/text';

const iconSize = 30;
const textSize = TEXT_SIZES.MICRO;
const textSpacing = 3;
export const CONTENT_HEIGHT = iconSize + textSize + textSpacing;

export default {
  icon: {
    flex: 1,
  },

  iconWrapper: {
    flex: 1,
    paddingTop: 5,
  },

  touchWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: GREY,
    fontSize: textSize,
    marginTop: textSpacing,
  },

  iconSize,
  iconColour: GREY,
  iconColourActive: BLUE,
};

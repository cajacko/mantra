import { StyleSheet } from 'react-native';
import { TEXT_SIZES } from 'constants/text';
import { BLACK, YELLOW, YELLOW_HIGHLIGHT } from 'constants/colours';

const fontSize = TEXT_SIZES.LARGE;
const size = fontSize * 2;
const offset = 20;

export const BOTTOM_OFFSET = size + (offset * 2);

export default StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: offset,
    right: offset,
    height: size,
    width: size,
    backgroundColor: YELLOW,
    borderWidth: 2,
    borderColor: YELLOW_HIGHLIGHT,
    borderRadius: size,
    shadowOffset: { width: -2, height: 2 },
    shadowColor: BLACK,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    fontSize,
    lineHeight: fontSize,
  },
});

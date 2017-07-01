import { StyleSheet } from 'react-native';
import { TEXT_SIZES } from 'constants/text';
import { GREY, GREY_LIGHT } from 'constants/colours';

export default StyleSheet.create({
  container: {
    backgroundColor: GREY_LIGHT,
    borderBottomWidth: 1,
    borderColor: GREY,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    zIndex: 2,
  },

  textContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: TEXT_SIZES.SMALL,
  },
});

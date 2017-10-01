import { StyleSheet } from 'react-native';
import { WHITE, GREY_DARK } from 'constants/colours';
import { TEXT_SIZES } from 'constants/text';

const iconSize = 26;

export default {
  container: {
    borderBottomColor: GREY_DARK,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: WHITE,
    fontSize: TEXT_SIZES.SMALL,
    marginLeft: 20,
  },

  icon: {
    alignItems: 'center',
    justfyContent: 'center',
    width: iconSize,
  },

  iconSize,
  iconColour: WHITE,
};

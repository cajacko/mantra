import { TEXT_SIZES } from 'constants/text';
import { GREY_LIGHTER, GREY_LIGHT, RED_LIGHT } from 'constants/colours';

export default {
  container: {
    backgroundColor: GREY_LIGHTER,
    alignItems: 'center',
    borderColor: GREY_LIGHT,
    borderBottomWidth: 1,
  },

  containerNegative: {
    backgroundColor: RED_LIGHT,
  },

  text: {
    padding: 10,
    fontSize: TEXT_SIZES.SMALL,
  },
};

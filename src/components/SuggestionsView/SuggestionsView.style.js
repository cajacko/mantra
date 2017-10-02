import { WHITE, GREY_LIGHT } from 'constants/colours';
import { TEXT_SIZES } from 'constants/text';

export default {
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },

  description: {
    backgroundColor: GREY_LIGHT,
    padding: 10,
    textAlign: 'center',
    fontSize: TEXT_SIZES.SMALL,
  },

  content: {
    flex: 1,
  },

  noMoreContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  noMoreText: {
    fontSize: TEXT_SIZES.MEDIUM,
    textAlign: 'center',
  },
};

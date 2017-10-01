import { WHITE } from 'constants/colours';
import { TEXT_SIZES } from 'constants/text';

export default {
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  noneMessage: {
    fontSize: TEXT_SIZES.MEDIUM,
  },

  addButton: {
    marginTop: 20,
  },
};

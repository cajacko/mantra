import statusBarHeight from 'helpers/statusBarHeight';
import { TEXT_SIZES } from 'constants/text';
import { GREY_LIGHT } from 'constants/colours';

export default {
  container: {
    flex: 1,
    paddingTop: statusBarHeight(),
  },

  delete: {
    marginTop: 50,
    alignItems: 'center',
    flex: 1,
  },

  deleteButton: {
    padding: 10,
    backgroundColor: GREY_LIGHT,
    width: 200,
  },

  deleteText: {
    fontSize: TEXT_SIZES.MEDIUM,
    textAlign: 'center',
  },
};

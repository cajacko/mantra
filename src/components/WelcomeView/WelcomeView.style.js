import statusBarHeight from 'helpers/statusBarHeight';
import { WHITE, BLACK } from 'constants/colours';
import { TEXT_SIZES } from 'constants/text';

export default {
  container: {
    flex: 1,
    paddingTop: statusBarHeight(),
    backgroundColor: WHITE,
  },

  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },

  image: {
    flex: 2,
    shadowColor: BLACK,
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 2 },
    shadowRadius: 5,
  },

  title: {
    fontSize: TEXT_SIZES.MEDIUM,
  },

  textContent: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },

  button: {
    marginTop: 20,
    width: 100,
  },
};

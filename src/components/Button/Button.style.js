import {
  YELLOW,
  YELLOW_HIGHLIGHT,
  BLACK,
  GREY_LIGHTER,
  GREY_LIGHT,
  GREY,
} from 'constants/colours';
import { TEXT_SIZES } from 'constants/text';

export default {
  button: {
    alignItems: 'center',
    shadowColor: BLACK,
    shadowOpacity: 0.3,
  },

  buttonDefault: {
    backgroundColor: YELLOW,
    borderColor: YELLOW_HIGHLIGHT,
  },

  buttonDull: {
    backgroundColor: GREY_LIGHTER,
    borderColor: GREY_LIGHT,
  },

  buttonSizeDefault: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    borderWidth: 2,
    shadowOffset: { width: -2, height: 2 },
    shadowRadius: 5,
  },

  buttonSizeSmall: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 10,
    borderWidth: 1,
    shadowOffset: { width: -1, height: 1 },
    shadowRadius: 3,
  },

  buttonText: {},

  textSizeDefault: {
    fontSize: TEXT_SIZES.MEDIUM,
  },

  textSizeSmall: {
    fontSize: TEXT_SIZES.SMALL,
  },

  textDull: {
    color: GREY,
  },
};

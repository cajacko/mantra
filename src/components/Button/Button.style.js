import { YELLOW, YELLOW_HIGHLIGHT, BLACK, GREY_LIGHTER, GREY_LIGHT, GREY } from 'constants/colours';
import { TEXT_SIZES } from 'constants/text';

export default {
  button: {
    borderWidth: 2,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    shadowOffset: { width: -2, height: 2 },
    shadowColor: BLACK,
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  buttonDefault: {
    backgroundColor: YELLOW,
    borderColor: YELLOW_HIGHLIGHT,
  },

  buttonDull: {
    backgroundColor: GREY_LIGHTER,
    borderColor: GREY_LIGHT,
  },

  buttonText: {
    fontSize: TEXT_SIZES.MEDIUM,
  },

  textDull: {
    color: GREY,
  },
};

import { GREY_LIGHT, GREY } from 'constants/colours';

const suggestionHeight = 56;

export default {
  meta: {
    marginTop: 40,
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: GREY_LIGHT,
  },

  suggestion: {
    height: suggestionHeight,
  },

  suggestionTitle: {
    marginBottom: 5,
  },

  suggestionLink: {
    fontSize: 12,
  },

  suggestionIconContainer: {
    height: suggestionHeight,
  },

  suggestionIcon: {},

  saveSameColor: GREY,
};

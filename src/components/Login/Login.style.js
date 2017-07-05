import { StyleSheet } from 'react-native';
import statusBarHeight from 'helpers/statusBarHeight';
import { WHITE, YELLOW, YELLOW_HIGHLIGHT, BLACK, GREY_LIGHTER, GREY_LIGHT, GREY } from 'constants/colours';

import { TEXT_SIZES, TEXT_COLOURS } from 'constants/text';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight(),
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  header: {
    alignItems: 'center',
  },

  title: {
    fontSize: TEXT_SIZES.LARGE,
    marginTop: 20,
  },

  description: {
    marginTop: 12,
  },

  login: {
    alignItems: 'center',
  },

  loginTitle: {
    fontSize: TEXT_SIZES.MEDIUM,
  },

  input: {
    marginBottom: 35,
    backgroundColor: GREY_LIGHTER,
    borderColor: GREY_LIGHT,
    borderWidth: 2,
    fontSize: TEXT_SIZES.MEDIUM,
    height: 40,
    marginTop: 20,
    width: 200,
    textAlign: 'center',
  },

  placeholderColor: TEXT_COLOURS.GREY,

  button: {
    backgroundColor: YELLOW,
    borderColor: YELLOW_HIGHLIGHT,
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

  buttonDisabled: {
    backgroundColor: GREY_LIGHTER,
    borderColor: GREY_LIGHT,
  },

  buttonText: {
    fontSize: TEXT_SIZES.MEDIUM,
  },

  buttonTextDisabled: {
    color: GREY,
  },

  register: {
    marginBottom: 50,
    alignItems: 'center',
  },

  activity: {
    position: 'absolute',
    bottom: -35,
  },
});

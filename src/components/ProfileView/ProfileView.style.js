import { StyleSheet } from 'react-native';
import statusBarHeight from 'helpers/statusBarHeight';
import { WHITE, YELLOW, YELLOW_HIGHLIGHT, BLACK, GREY_LIGHTER, GREY_LIGHT } from 'constants/colours';
import { TEXT_SIZES } from 'constants/text';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight(),
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  title: {
    fontSize: TEXT_SIZES.LARGE,
    marginTop: 20,
  },

  content: {
    maxWidth: 300,
  },

  intro: {
    fontSize: TEXT_SIZES.MEDIUM,
    textAlign: 'center',
  },

  id: {
    fontSize: TEXT_SIZES.LARGE,
    backgroundColor: GREY_LIGHTER,
    borderColor: GREY_LIGHT,
    borderWidth: 2,
    padding: 10,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  description: {
    fontSize: TEXT_SIZES.SMALL,
    textAlign: 'center',
  },

  buttonContainer: {},
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
    marginBottom: 30,
    maxWidth: 300,
  },

  buttonText: {
    fontSize: TEXT_SIZES.MEDIUM,
  },

  reminders: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  reminderText: {
    fontSize: TEXT_SIZES.MEDIUM,
    marginBottom: 20,
  },
});

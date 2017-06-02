import { LARGE_TEXT, MEDIUM_TEXT } from 'constants/fontStyles';

export default {
  container: {
    borderWidth: 2,
    borderBottomStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 10,
  },

  title: {
    ...LARGE_TEXT,
    display: 'block',
    marginBottom: 10,
  },

  description: {
    ...MEDIUM_TEXT,
    display: 'block',
  },

  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 10,
  }
}

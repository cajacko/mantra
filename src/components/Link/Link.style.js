import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  link: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
  },

  linkBullet: {
    fontSize: 16,
    marginRight: 10,
  },

  linkText: {
    flex: 1,
    fontSize: 16,
    color: '#0065a2',
    textDecorationLine: 'underline',
  },

  linkLast: {
    paddingBottom: 0,
  },

  linkTextHighlight: {
    color: 'black',
  },
});

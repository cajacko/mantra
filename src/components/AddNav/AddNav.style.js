import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#e2e2e2',
    borderBottomWidth: 1,
    borderColor: '#b7b7b7',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    zIndex: 2,
  },

  textContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 16,
  },
});

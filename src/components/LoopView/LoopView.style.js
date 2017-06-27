import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    backgroundColor: '#FFEB3B',
    borderWidth: 2,
    borderColor: '#fde400',
    borderRadius: 60,
    shadowOffset: { width: -2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonHighlight: {
    backgroundColor: '#bdaa00',
    borderColor: '#b5a300',
  },

  addButtonText: {
    fontSize: 30,
    lineHeight: 30,
  },

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },

  list: {},
});

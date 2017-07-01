import { StyleSheet } from 'react-native';

const size = 60;
const offset = 20;
const fontSize = 30;


export const BOTTOM_OFFSET = size + (offset * 2);

export default StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: offset,
    right: offset,
    height: size,
    width: size,
    backgroundColor: '#FFEB3B',
    borderWidth: 2,
    borderColor: '#fde400',
    borderRadius: size,
    shadowOffset: { width: -2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    fontSize,
    lineHeight: fontSize,
  },
});

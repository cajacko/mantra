import { Keyboard } from 'react-native';

let isKeyboardUp = false;
let keyboardHeight = 0;

Keyboard.addListener('keyboardDidShow', (e) => {
  isKeyboardUp = true;
  keyboardHeight = e.endCoordinates.height;
});

Keyboard.addListener('keyboardDidHide', () => {
  isKeyboardUp = false;
});

/**
 * Return the value of isKeyboardUp
 *
 * @return {boolean} whether the keyboard is being shown or not
 */
export function getIsKeyboardUp() {
  return isKeyboardUp;
}

/**
 * Return the value of the keyboard height
 *
 * @return {number} The height of the keyboard
 */
export function getKeyboardHeight() {
  return keyboardHeight;
}

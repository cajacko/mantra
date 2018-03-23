import { Toast } from 'native-base';
import { getIsKeyboardUp, getKeyboardHeight } from 'helpers/keyboard';

function toast(text, type, duration = 4000, buttonText = 'Dismiss') {
  const options = {
    text,
    type,
    position: 'bottom',
    buttonText,
    duration,
  };

  if (getIsKeyboardUp()) options.style = { marginBottom: getKeyboardHeight() };

  Toast.show(options);
}

export default toast;

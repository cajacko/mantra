import { Toast } from 'native-base';

function toast(text, type, duration = 4000, buttonText = 'Dismiss') {
  Toast.show({
    text,
    type,
    position: 'bottom',
    buttonText,
    duration,
  });
}

export default toast;

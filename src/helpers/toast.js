import { Toast } from 'native-base';

function toast(text, duration = 4000, buttonText = 'Dismiss') {
  Toast.show({ text, position: 'bottom', buttonText, duration });
}

export default toast;

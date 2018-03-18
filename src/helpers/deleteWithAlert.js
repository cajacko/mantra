import { Alert } from 'react-native';
import { deleteMantra } from 'store/mantra/actions';

export default function (dispatch, id) {
  Alert.alert('Delete Post', 'Are you sure you want to delete this post?', [
    { text: 'Back' },
    {
      text: 'Delete',
      onPress: () => dispatch(deleteMantra(id)),
    },
  ]);
}

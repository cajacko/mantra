import { Alert } from 'react-native';
import deleteMantra from 'actions/deleteMantra';

export default function (dispatch, id) {
  Alert.alert('Delete Post', 'Are you sure you want to delete this post?', [
    {
      text: 'Delete',
      onPress: () => dispatch(deleteMantra(id)),
    },
    { text: 'Back' },
  ]);
}

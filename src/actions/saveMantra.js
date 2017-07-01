import moment from 'moment';
import uuidv4 from 'uuid/v4';

export default function (title) {
  const id = uuidv4();
  const dateAdded = moment().unix();
  return {
    type: 'SAVE_MANTRA',
    payload: { id, title, dateAdded },
  };
}

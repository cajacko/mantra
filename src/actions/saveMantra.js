import moment from 'moment';
import uuidv4 from 'uuid/v4';

export default function (title, item) {
  const now = moment().unix();
  let payload = {};

  if (item) {
    payload = Object.assign({}, item);
  }

  payload.title = title;
  payload.dateModified = now;
  payload.deleted = false;
  payload.online = false;

  if (!item) {
    payload.id = uuidv4();
    payload.dateAdded = now;
  }

  return {
    type: 'SAVE_MANTRA',
    payload,
  };
}

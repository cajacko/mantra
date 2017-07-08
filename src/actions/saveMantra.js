import moment from 'moment';
import uuidv4 from 'uuid/v4';

export default function (title, existingId) {
  const now = moment().unix();

  const payload = {
    title,
    dateModified: now,
    deleted: false,
    online: false,
  };

  if (existingId) {
    payload.id = existingId;
  } else {
    payload.id = uuidv4();
    payload.dateAdded = now;
  }

  return {
    type: 'SAVE_MANTRA',
    payload,
  };
}

import moment from 'moment';

export default function (id) {
  return {
    type: 'DELETE_MANTRA',
    payload: {
      id,
      dateModified: moment().unix(),
    },
  };
}

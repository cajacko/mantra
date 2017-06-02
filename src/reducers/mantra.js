import moment from 'moment';

const defaultData = {
  mantra: {
    1: {
      dateUpdated: moment().unix(),
      title: 'Mantra 1',
      description: 'Description 1',
    },
    2: {
      dateUpdated: moment().unix(),
      title: 'Mantra 2',
      description: 'Description 2',
    },
    3: {
      dateUpdated: moment().unix(),
      title: 'Mantra 3',
      description: 'Description 3',
    },
    4: {
      dateUpdated: moment().unix(),
      title: 'Mantra 4',
      description: 'Description 4',
    },
    5: {
      dateUpdated: moment().unix(),
      title: 'Mantra 5',
      description: 'Description 5',
    },
    6: {
      dateUpdated: moment().unix(),
      title: 'Mantra 6',
      description: 'Description 6',
    },
  },
  mantraLoop: [1, 2, 3, 4, 5],
};

export default (state = defaultData, { type, payload }) => {
  let newState = Object.assign({}, state);
  let index;

  switch (type) {
    case 'SAVE_MANTRA':
      newState.mantra[payload.id] = {
        title: payload.title,
        description: payload.description,
      };

      index = newState.mantraLoop.indexOf(payload);

      if (index === -1) {
        newState.mantraLoop.unshift(payload.id);
      }

      return newState;
    case 'DELETE_MANTRA':
      delete newState.mantra[payload];

      index = newState.mantraLoop.indexOf(payload);

      if (index > -1) {
        newState.mantraLoop.splice(index, 1);
      }

      return newState;
    default:
      return state;
  }
};

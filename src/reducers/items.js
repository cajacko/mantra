import { mantra } from 'constants/data';

const defaultState = {};

mantra.forEach((item) => {
  defaultState[item.id] = item;
});

export default (state = defaultState) => state;

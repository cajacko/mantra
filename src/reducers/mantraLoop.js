import { mantra } from 'constants/data';

const defaultState = [];

mantra.forEach(item => defaultState.push(item.id));

export default (state = defaultState) => state;

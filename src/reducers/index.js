import { combineReducers } from 'redux';
import items from 'reducers/items';
import view from 'reducers/view';
import myjsonId from 'reducers/myjsonId';

export default combineReducers({ items, view, myjsonId });

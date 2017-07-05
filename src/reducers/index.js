import { combineReducers } from 'redux';
import items from 'reducers/items';
import mantraLoop from 'reducers/mantraLoop';
import view from 'reducers/view';
import myjsonId from 'reducers/myjsonId';

export default combineReducers({ items, mantraLoop, view, myjsonId });

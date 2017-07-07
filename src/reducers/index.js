import { combineReducers } from 'redux';
import items from 'reducers/items';
import view from 'reducers/view';
import myjsonId from 'reducers/myjsonId';
import lastAction from 'reducers/lastAction';
import version from 'reducers/version';

export default combineReducers({ items, view, myjsonId, lastAction, version });

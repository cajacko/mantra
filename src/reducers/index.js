import { combineReducers } from 'redux';
import items from 'reducers/items';
import mantraLoop from 'reducers/mantraLoop';

export default combineReducers({ items, mantraLoop });

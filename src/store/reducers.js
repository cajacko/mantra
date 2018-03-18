import { combineReducers } from 'redux';
import items from 'store/mantra/reducer';
import view from 'store/view/reducer';
import myjsonId from 'reducers/myjsonId';
import lastAction from 'reducers/lastAction';
import version from 'reducers/version';
import notifications from 'reducers/notifications';
import permissions from 'reducers/permissions';
import lastSetBadge from 'reducers/lastSetBadge';
import lastSetNotifications from 'reducers/lastSetNotifications';
import syncLoading from 'reducers/syncLoading';
import offlineItemsSyncing from 'reducers/offlineItemsSyncing';
import menuOpen from 'reducers/menuOpen';
import firstTime from 'reducers/firstTime';
import suggestions from 'reducers/suggestions';
import discardedSuggestions from 'reducers/discardedSuggestions';
import addedSuggestions from 'store/addedSuggestions/reducer';
import acceptableRequests from 'reducers/acceptableRequests';
import sources from 'store/sources/reducer';
import settings from 'store/settings/reducer';

const appReducer = combineReducers({
  items,
  view,
  myjsonId,
  lastAction,
  version,
  notifications,
  permissions,
  lastSetBadge,
  lastSetNotifications,
  syncLoading,
  offlineItemsSyncing,
  menuOpen,
  firstTime,
  suggestions,
  discardedSuggestions,
  addedSuggestions,
  acceptableRequests,
  sources,
  settings,
});

/**
 * Completely wipe the store when a user logs out. This top level reducer
 * leaves no room for mistake
 *
 * @param  {Object} state  The existing state
 * @param  {Object} action The dispatched action
 * @return {Object}        The transformed state
 */
export default (state, action) => {
  let newState = state ? Object.assign({}, state) : state;

  if (action.type === 'LOGOUT') {
    newState = undefined;
  }

  return appReducer(newState, action);
};

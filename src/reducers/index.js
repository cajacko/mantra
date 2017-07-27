import { combineReducers } from 'redux';
import items from 'reducers/items';
import view from 'reducers/view';
import myjsonId from 'reducers/myjsonId';
import lastAction from 'reducers/lastAction';
import version from 'reducers/version';
import notifications from 'reducers/notifications';
import permissions from 'reducers/permissions';
import lastSetBadge from 'reducers/lastSetBadge';
import lastSetNotifications from 'reducers/lastSetNotifications';
import syncLoading from 'reducers/syncLoading';
import offlineItemsSyncing from 'reducers/offlineItemsSyncing';

export default combineReducers({
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
});

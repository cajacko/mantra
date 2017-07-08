import { Permissions } from 'expo';

export function hasPermissions(callback) {
  Permissions.getAsync(Permissions.REMOTE_NOTIFICATIONS)
    .then((response) => {
      if (response.status === 'granted') {
        callback(true);
      } else {
        callback(false);
      }
    });
}

export function setPermissions(callback) {
  Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS)
    .then((response) => {
      if (response.status === 'granted') {
        callback(true);
      } else {
        callback(false);
      }
    });
}

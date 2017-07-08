export function setNotifications(payload) {
  return {
    type: 'SET_NOTIFICATIONS',
    payload,
  };
}

export function setLastSetBadge(timestamp) {
  return {
    type: 'LAST_SET_BADGE',
    payload: timestamp,
  };
}

export function setLastSetNotifications(timestamp) {
  return {
    type: 'LAST_SET_NOTIFICATIONS',
    payload: timestamp,
  };
}

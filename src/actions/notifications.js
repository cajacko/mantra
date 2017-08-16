export function setNotifications(value, time) {
  return {
    type: 'SET_NOTIFICATIONS',
    payload: { value, time },
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

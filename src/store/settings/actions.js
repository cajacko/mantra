export function changeSetting(key, value) {
  return {
    type: 'CHANGE_SETTING',
    payload: { key, value },
  };
}

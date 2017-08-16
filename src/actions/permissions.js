import { hasPermissions, setPermissions } from 'helpers/permissions';

export function askForPermission(time) {
  return (dispatch) => {
    setPermissions((granted) => {
      let permissions;
      let value;

      if (granted) {
        permissions = 'granted';
        value = true;
      } else {
        permissions = 'declined';
        value = false;
      }

      dispatch({
        type: 'SET_PERMISSIONS',
        payload: { permissions, time, value },
      });
    });
  };
}

export function setPermissionsIfChanged() {
  return (dispatch, getState) => {
    hasPermissions((granted) => {
      const { permissions } = getState();

      if (granted && permissions !== 'granted') {
        dispatch({
          type: 'SET_PERMISSIONS',
          payload: { permissions: 'granted' },
        });
      } else if (!granted && permissions === 'granted') {
        dispatch({
          type: 'SET_PERMISSIONS',
          payload: { permissions: 'declined' },
        });
      }
    });
  };
}

import { hasPermissions, setPermissions } from 'helpers/permissions';

export function askForPermission() {
  return (dispatch) => {
    setPermissions((granted) => {
      let permissions;

      if (granted) {
        permissions = 'granted';
      } else {
        permissions = 'declined';
      }

      dispatch({
        type: 'SET_PERMISSIONS',
        payload: permissions,
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
          payload: 'granted',
        });
      } else if (!granted && permissions === 'granted') {
        dispatch({
          type: 'SET_PERMISSIONS',
          payload: 'declined',
        });
      }
    });
  };
}

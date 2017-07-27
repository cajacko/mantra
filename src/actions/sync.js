import mergeItems from 'helpers/mergeItems';

function getServerData(myjsonId) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.myjson.com/bins/${myjsonId}`)
      .then(response => response.json())
      .then((payload) => {
        if (!payload || !payload.items) {
          reject('BAD_RESPONSE');
        } else {
          resolve(payload.items);
        }
      })
      .catch((payload) => {
        if (payload) {
          reject(payload);
        } else {
          reject('UNDEFINED_ERROR');
        }
      });
  });
}

function setServerData(myjsonId, items) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.myjson.com/bins/${myjsonId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    })
      .then(response => response.json())
      .then((payload) => {
        if (payload && payload.items) {
          resolve(payload.items);
        } else {
          reject(payload);
        }
      })
      .catch((payload) => {
        if (payload) {
          reject(payload);
        } else {
          reject('UNDEFINED_ERROR');
        }
      });
  });
}

function offLinePostsSyncing(items) {
  const offlinePosts = [];

  Object.keys(items).forEach((id) => {
    if (items[id].online === false) {
      offlinePosts.push(id);
    }
  });

  return offlinePosts;
}

let activeSync = null;
let id = 0;

export default function (cancelOtherCalls) {
  const syncId = id;
  id += 1;

  return (dispatch, getState) => {
    if (!cancelOtherCalls && activeSync !== null) {
      return;
    }

    const { items, myjsonId } = getState();

    activeSync = syncId;

    dispatch({ type: 'SYNC_INIT', payload: offLinePostsSyncing(items) });

    getServerData(myjsonId)
      .then((serverItems) => {
        if (activeSync !== syncId) {
          return null;
        }

        const mergedItems = mergeItems(items, serverItems, true);
        return setServerData(myjsonId, mergedItems);
      })
      .then((serverItems) => {
        if (activeSync === syncId) {
          activeSync = null;

          if (serverItems) {
            dispatch({ type: 'SYNC_SUCCESS', payload: serverItems });
          } else {
            dispatch({ type: 'SYNC_ERROR', payload: 'No serverItems' });
          }
        }
      })
      .catch((err) => {
        if (activeSync === syncId) {
          dispatch({ type: 'SYNC_ERROR', payload: err });
          activeSync = null;
        }
      });
  };
}

import mergeItems from 'helpers/mergeItems';
import combineArrays from 'helpers/combineArrays';

function getServerData(myjsonId) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.myjson.com/bins/${myjsonId}`)
      .then(response => response.json())
      .then((payload) => {
        if (!payload || !payload.items) {
          reject('BAD_RESPONSE');
        } else {
          resolve(payload);
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

function setServerData(myjsonId, data) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.myjson.com/bins/${myjsonId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then((payload) => {
        if (payload && payload.items) {
          resolve(payload);
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

    const {
      items,
      myjsonId,
      addedSuggestions,
      discardedSuggestions,
    } = getState();

    activeSync = syncId;

    dispatch({ type: 'SYNC_INIT', payload: offLinePostsSyncing(items) });

    getServerData(myjsonId)
      .then((response) => {
        if (activeSync !== syncId) {
          return null;
        }

        const mergedItems = mergeItems(items, response.items, true);

        const data = {
          items: mergedItems,
          addedSuggestions: combineArrays(
            addedSuggestions,
            response.addedSuggestions,
          ),
          discardedSuggestions: combineArrays(
            discardedSuggestions,
            response.discardedSuggestions,
          ),
        };

        return setServerData(myjsonId, data);
      })
      .then((data) => {
        if (activeSync === syncId) {
          activeSync = null;

          if (data) {
            dispatch({ type: 'SYNC_SUCCESS', payload: data });
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

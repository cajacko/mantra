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

function mergeItems(localItems, serverItems) {
  const items = Object.assign({}, localItems);

  Object.keys(serverItems).forEach((id) => {
    if (!items[id]) {
      items[id] = serverItems[id];
    } else if (serverItems[id].dateUpdated > items[id].dateUpdated) {
      items[id] = serverItems[id];
    }
  });

  Object.keys(items).forEach((id) => {
    items[id].online = true;
  });

  return items;
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

export default function (localItems, myjsonId) {
  return (dispatch) => {
    dispatch({ type: 'SYNC_INIT' });

    getServerData(myjsonId)
      .then((serverItems) => {
        const items = mergeItems(localItems, serverItems);
        return setServerData(myjsonId, items);
      })
      .then(items => dispatch({ type: 'SYNC_SUCCESS', payload: items }))
      .catch(err => dispatch({ type: 'SYNC_ERROR', payload: err }))
  };
}

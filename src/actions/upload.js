export default function (localData, myjsonId) {
  return (dispatch) => {
    dispatch({ type: 'UPLOAD_INIT', payload: localData });

    fetch(`https://api.myjson.com/bins/${myjsonId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(localData),
    })
      .then(response => response.json())
      .then(payload => dispatch({ type: 'UPLOAD_SUCESS', payload }))
      .catch(payload => dispatch({ type: 'UPLOAD_ERROR', payload }));
  };
}

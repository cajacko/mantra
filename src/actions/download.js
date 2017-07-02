import { myjsonId } from 'root/env.json';

export default function () {
  return (dispatch) => {
    dispatch({ type: 'DOWNLOAD_INIT' });

    fetch(`https://api.myjson.com/bins/${myjsonId}`)
      .then(response => response.json())
      .then(payload => dispatch({ type: 'DOWNLOAD_SUCESS', payload }))
      .catch(payload => dispatch({ type: 'DOWNLOAD_ERROR', payload }));
  };
}

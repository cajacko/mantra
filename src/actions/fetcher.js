/* @flow */

import getFetcherAction from 'helpers/ajax/getFetcherAction';

export const fetcherActions = {
  INIT: 'INIT',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

const callStatus = {};

export function init(url: string, postData?: {}, action: string, id: number) {
  callStatus[id] = new Date();

  return {
    type: getFetcherAction(action, fetcherActions.INIT),
    payload: { url, postData, fetcher: { action, id } },
  };
}

export function success(
  data: {},
  url: string,
  postData?: {},
  action: string,
  id: number,
) {
  return (dispatch: () => void) => {
    if (!callStatus[id]) {
      return false;
    }

    delete callStatus[id];

    return dispatch({
      type: getFetcherAction(action, fetcherActions.SUCCESS),
      payload: { url, postData, data, fetcher: { action, id } },
    });
  };
}

export function failure(
  error: any,
  url: string,
  postData?: {},
  action: string,
  id: number,
) {
  return (dispatch: () => void) => {
    if (!callStatus[id]) {
      return false;
    }

    delete callStatus[id];

    return dispatch({
      type: getFetcherAction(action, fetcherActions.ERROR),
      payload: { error, url, postData, fetcher: { action, id } },
    });
  };
}

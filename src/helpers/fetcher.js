import getStore from 'store/getStore';

const store = getStore();

/**
 * Fetch data from the server, must specify an id to check against before
 * returning data. As we may want to cancel the response
 *
 * @param  {String} url          The URL to fetch
 * @param  {String} id           The unique id of the request
 * @param  {Object} [options={}] An optional object of options to pass to the
 * native fetch function
 * @return {Promise}              A promise that resolves if the call was
 * successful and we still want the output
 */
export default function (url, id, options = {}) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error(`No ID passed to fetcher for: ${url}`));
      return;
    }

    fetch(url, options)
      .then((response) => {
        const { acceptableRequests } = store.getState();

        if (acceptableRequests.includes(id)) {
          resolve(response);
        } else {
          reject(new Error(`Response is not acceptable: ${id}`));
        }
      })
      .catch(reject);
  });
}

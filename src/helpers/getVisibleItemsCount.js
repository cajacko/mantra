/**
 * Get the count of visible mantras
 *
 * @param  {Object} items Object of items, keyed by id
 * @return {Number}       The count
 */
export default function (items) {
  let count = 0;

  Object.keys(items).forEach((id) => {
    if (items[id].deleted === false) {
      count += 1;
    }
  });

  return count;
}

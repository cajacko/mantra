/**
 * Transform the items from the store into and array of ordered mantra ID's,
 * optionally filtered by title. Also figures out if any visible mantra are
 * being shown, and returns a flag for noItems
 *
 * @param  {Object} items The items object from the store. Keyed object of
 * mantra
 * @param  {?String} filterValue The string to filter the mantrs titles by
 * @return {Object}       Returns an array of strings, representing Mantra ID's
 * (idLoop). And a flag indicating if any visible items are being shown
 */
export default function (items, filterValue) {
  const mantraLoop = [];
  const ids = Object.keys(items);

  let noItems = true;

  ids.forEach((id) => {
    const item = items[id];
    let pushItem = false;

    if (filterValue) {
      const title = item.title.toLowerCase();
      const test = filterValue.toLowerCase();

      if (title.includes(test)) {
        pushItem = item;
      }
    } else {
      pushItem = item;
    }

    if (pushItem) {
      mantraLoop.push(pushItem);

      if (pushItem.deleted === false) {
        noItems = false;
      }
    }
  });

  mantraLoop.sort((a, b) => b.dateAdded - a.dateAdded);

  const idLoop = [];
  mantraLoop.forEach(({ id }) => idLoop.push({ key: id }));

  return { idLoop, noItems };
}

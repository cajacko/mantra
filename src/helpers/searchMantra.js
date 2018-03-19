const compareStrings = (filterValue) => {
  const test = filterValue.toLowerCase();

  return (value) => {
    if (!value) return false;

    if (value.toLowerCase().includes(test)) return true;

    return false;
  };
};

const shouldIncludeMantra = (item, sources, filterValue) => {
  if (filterValue) {
    const compare = compareStrings(filterValue);

    if (compare(item.title)) return true;

    if (item.source) {
      const source = sources[item.source];

      if (source) {
        if (compare(source.title)) return true;
        if (compare(source.link)) return true;
      }
    }
  } else {
    return true;
  }

  return false;
};

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
export default function (items, sources, filterValue) {
  const mantraLoop = [];
  const ids = Object.keys(items);

  let noItems = true;

  ids.forEach((id) => {
    const item = items[id];

    if (shouldIncludeMantra(item, sources, filterValue)) {
      mantraLoop.push(item);

      if (item.deleted === false) {
        noItems = false;
      }
    }
  });

  mantraLoop.sort((a, b) => b.dateAdded - a.dateAdded);

  const idLoop = [];
  mantraLoop.forEach(({ id }) => idLoop.push({ key: id }));

  return { idLoop, noItems };
}

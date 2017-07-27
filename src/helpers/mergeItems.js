export default function (localItems, serverItems, markOnline) {
  const items = Object.assign({}, localItems);

  Object.keys(serverItems).forEach((id) => {
    if (!items[id]) {
      items[id] = serverItems[id];
    } else if (serverItems[id].dateUpdated > items[id].dateUpdated) {
      items[id] = serverItems[id];
    }
  });

  let newItems = items;

  if (markOnline) {
    // Setup as new object, as was somehow editing the original items
    // Even through we use Object.assign above
    newItems = {};

    Object.keys(items).forEach((id) => {
      const item = Object.assign({}, items[id]);
      item.online = true;
      newItems[id] = item;
    });
  }

  return newItems;
}

export default function (localItems, serverItems, markOnline) {
  const items = Object.assign({}, localItems);

  Object.keys(serverItems).forEach((id) => {
    if (!items[id]) {
      items[id] = serverItems[id];
    } else if (serverItems[id].dateUpdated > items[id].dateUpdated) {
      items[id] = serverItems[id];
    }
  });

  if (markOnline) {
    Object.keys(items).forEach((id) => {
      items[id].online = true;
    });
  }

  return items;
}

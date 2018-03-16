const getOrderedSources = sources =>
  Object.keys(sources)
    .map(id => sources[id])
    .filter(({ deleted }) => !deleted)
    .sort((a, b) => b.dateAdded - a.dateAdded);

export default getOrderedSources;

const getOrderedSources = sources =>
  Object.keys(sources)
    .map(id => sources[id])
    .filter(({ deleted }) => !deleted)
    .sort((a, b) => b.dateModified - a.dateModified);

export default getOrderedSources;

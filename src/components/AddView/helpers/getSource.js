const getSource = ({ ...props, id, items, sources }, orderedSources, prefillSource) => {
  let item;
  let source = {};

  if (id) {
    item = items[id];

    if (item.source) {
      source = sources[item.source];

      if (!source) {
        // eslint-disable-next-line
        console.error('Could not find a source with the given id', props);
        source = {};
      }
    }
  } else if (prefillSource) {
    const lastSource = orderedSources[0];

    if (lastSource) source = lastSource;
  }

  return source;
};

export default getSource;

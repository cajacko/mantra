const getSource = (props) => {
  let item;
  let source = {};

  if (props.id) {
    item = props.items[props.id];

    if (item.source) {
      source = props.sources[item.source];

      if (!source) {
        // eslint-disable-next-line
        console.error('Could not find a source with the given id', props);
        source = {};
      }
    }
  }

  return source;
};

export default getSource;

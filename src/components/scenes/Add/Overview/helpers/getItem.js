import characterCount from 'constants/characterCount';

const getItem = (props) => {
  let title = '';
  let enableSave = false;
  let charactersLeft = characterCount;
  let id;
  let showDelete = false;
  let item;

  if (props.id) {
    item = props.items[props.id];

    if (!item) {
      // eslint-disable-next-line
      console.error('Could not find item with given id', props);
      item = { id: props.id };
    }

    title = item.title;
    enableSave = true;
    charactersLeft = characterCount - title.length;
    id = props.id;
    showDelete = true;
  }

  return {
    item,
    title,
    enableSave,
    charactersLeft,
    id,
    showDelete,
  };
};

export default getItem;

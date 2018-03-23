import { Alert } from 'react-native';

const saveSource = (setState, sources, title, link, id) => {
  const createNew = () => {
    setState({
      source: { title, link },
      shouldShowAddSource: false,
    });
  };

  // This is a new source so set just the title and link
  if (!id) {
    createNew();

    return;
  }

  // We are saving from a source that already exists

  const source = Object.assign({}, sources[id]);

  const update = () => {
    setState({
      source,
      shouldShowAddSource: false,
    });
  };

  // If the title and link are still the same as the original source then set
  // the source as the original source object
  if (source.title === title && source.link === link) {
    update();

    return;
  }

  // Changes have been made to the original source, ask the user if they want
  // to save these changes for every mantra item that uses this source, or
  // create a new source
  Alert.alert(
    'Existing source',
    'You have made changes to an existing source. Do you want to update the existing source, or create a new one?',
    [
      { text: 'Cancel' },
      {
        text: 'Update',
        onPress: () => {
          // Update the title and link with our changes
          source.title = title;
          source.link = link;

          update();
        },
      },
      {
        text: 'Create new',
        onPress: () => createNew(),
      },
    ]
  );
};

export default saveSource;

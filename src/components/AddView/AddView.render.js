import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Container, List, ListItem, Text, Icon, Left, Body } from 'native-base';
import AddSource from 'components/AddSource';
import AddNav from 'components/AddNav/AddNav';
import CharacterCount from 'components/CharacterCount/CharacterCount';
import AddInput from 'components/AddInput/AddInput';
import Button from 'components/Button/Button';
import style from 'components/AddView/AddView.style';

const AddView = ({
  saveMantra,
  back,
  enableSave,
  charactersLeft,
  onChange,
  title,
  deleteMantra,
  showDelete,
  setShowAddSource,
  shouldShowAddSource,
  saveSource,
  source,
}) => {
  if (shouldShowAddSource) {
    return (
      <AddSource
        goBack={setShowAddSource(false)}
        save={saveSource}
        title={source.title}
        link={source.link}
      />
    );
  }

  let deleteElement;

  if (showDelete) {
    deleteElement = (
      <View style={style.delete}>
        <Button onPress={deleteMantra} text="Delete" theme="dull" />
      </View>
    );
  }

  return (
    <Container>
      <AddNav enableSave={enableSave} save={saveMantra} back={back} />
      <CharacterCount count={charactersLeft} />
      <AddInput onChange={onChange} value={title} />
      {deleteElement}
      <List button style={style.list}>
        <ListItem icon onPress={setShowAddSource(true)} first last>
          <Left>
            <Icon name="link" />
          </Left>
          <Body>
            <Text>{source.title || 'Add Source'}</Text>
          </Body>
        </ListItem>
      </List>
    </Container>
  );
};

AddView.propTypes = {
  saveMantra: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
  enableSave: PropTypes.bool.isRequired,
  charactersLeft: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  deleteMantra: PropTypes.func.isRequired,
  showDelete: PropTypes.bool.isRequired,
  setShowAddSource: PropTypes.func.isRequired,
  shouldShowAddSource: PropTypes.bool.isRequired,
  saveSource: PropTypes.func.isRequired,
  source: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default AddView;

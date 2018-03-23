import React from 'react';
import PropTypes from 'prop-types';
import { Container, List, ListItem, Text, Icon, Left, Body } from 'native-base';
import AddSource from 'components/scenes/Add/Source';
import AddNav from 'components/AddNav/AddNav';
import CharacterCount from 'components/CharacterCount/CharacterCount';
import AddInput from 'components/AddInput/AddInput';
import style from 'components/AddView/AddView.style';
import StatusPadding from 'components/UI/StatusPadding';

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
  orderedSources,
}) => {
  if (shouldShowAddSource) {
    return (
      <AddSource
        goBack={setShowAddSource(false)}
        save={saveSource}
        title={source.title}
        link={source.link}
        orderedSources={orderedSources}
        id={source.id}
      />
    );
  }

  return (
    <Container>
      <StatusPadding androidOnly />
      <AddNav enableSave={enableSave} save={saveMantra} back={back} />
      <CharacterCount count={charactersLeft} />
      <AddInput onChange={onChange} value={title} />

      <List button style={style.list}>
        <ListItem icon onPress={setShowAddSource(true)} first>
          <Left>
            <Icon name="link" style={style.sourceIcon} />
          </Left>
          <Body>
            <Text numberOfLines={1}>{source.title || 'Add Source'}</Text>
          </Body>
        </ListItem>
        {showDelete && (
          <ListItem icon onPress={deleteMantra} last>
            <Left>
              <Icon name="trash" style={style.deleteIcon} />
            </Left>
            <Body>
              <Text>Delete</Text>
            </Body>
          </ListItem>
        )}
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
  orderedSources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default AddView;

import React from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import AddNav from 'components/AddNav/AddNav';
import CharacterCount from 'components/CharacterCount/CharacterCount';
import AddInput from 'components/AddInput/AddInput';
import DescriptionInput from 'components/DescriptionInput/DescriptionInput';
import Button from 'components/Button/Button';
import style from 'components/AddView/AddView.style';

const AddView = ({
  saveMantra,
  back,
  enableSave,
  charactersLeft,
  onTitleChange,
  onDescriptionChange,
  description,
  title,
  deleteMantra,
  showDelete,
}) => (
  <View style={style.container}>
    <StatusBar barStyle="dark-content" />
    <AddNav enableSave={enableSave} save={saveMantra} back={back} />
    <CharacterCount count={charactersLeft} />
    <AddInput onChange={onTitleChange} value={title} />
    <DescriptionInput onChange={onDescriptionChange} value={description} />
    {showDelete && (
      <View style={style.delete}>
        <Button onPress={deleteMantra} text="Delete" theme="dull" />
      </View>
    )}
  </View>
);

AddView.propTypes = {
  saveMantra: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
  enableSave: PropTypes.bool.isRequired,
  charactersLeft: PropTypes.number.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deleteMantra: PropTypes.func.isRequired,
  showDelete: PropTypes.bool.isRequired,
};

export default AddView;

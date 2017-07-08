import React from 'react';
import { View, StatusBar, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import AddNav from 'components/AddNav/AddNav';
import CharacterCount from 'components/CharacterCount/CharacterCount';
import AddInput from 'components/AddInput/AddInput';
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
}) => {
  let deleteElement;

  if (showDelete) {
    deleteElement = (
      <View style={style.delete}>
        <TouchableOpacity onPress={deleteMantra}>
          <View style={style.deleteButton}>
            <Text style={style.deleteText}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <AddNav enableSave={enableSave} save={saveMantra} back={back} />
      <CharacterCount count={charactersLeft} />
      <AddInput onChange={onChange} value={title} />
      {deleteElement}
    </View>
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
};

export default AddView;

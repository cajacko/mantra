import React from 'react';
import { View } from 'react-native';
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
}) => (
  <View style={style.container}>
    <AddNav enableSave={enableSave} save={saveMantra} back={back} />
    <CharacterCount count={charactersLeft} />
    <AddInput onChange={onChange} value={title} />
  </View>
);

AddView.propTypes = {
  saveMantra: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
  enableSave: PropTypes.bool.isRequired,
  charactersLeft: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddView;

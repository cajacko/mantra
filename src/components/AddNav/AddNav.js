import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import TextButton from 'components/TextButton/TextButton';
import style from 'components/AddNav/AddNav.style';

const CharacterCount = ({ enableSave, save, back }) => {
  let saveComponent = (
    <View style={style.button}>
      <TextButton action={save} text="Save" />
    </View>
  );

  if (!enableSave) {
    saveComponent = null;
  }

  return (
    <View style={style.container}>
      <View style={style.button}>
        <TextButton action={back} text="Back" />
      </View>
      {saveComponent}
      <View style={style.textContainer}>
        <Text style={style.text}>Add Mantra</Text>
      </View>
    </View>
  );
};

CharacterCount.propTypes = {
  enableSave: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
};

export default CharacterCount;

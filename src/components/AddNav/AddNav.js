import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import TextButton from 'components/TextButton/TextButton';

const CharacterCount = ({ enableSave, save, back }) => {
  let saveComponent = (
    <View>
      <TextButton action={save} text="Save" />
    </View>
  );

  if (!enableSave) {
    saveComponent = null;
  }

  return (
    <View>
      <View>
        <TextButton action={back} text="Back" />
      </View>
      <Text>Add Mantra</Text>
      {saveComponent}
    </View>
  );
};

CharacterCount.propTypes = {
  enableSave: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
};

export default CharacterCount;

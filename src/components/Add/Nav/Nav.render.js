import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/UI/Header';

const CharacterCount = ({ enableSave, save, back }) => (
  <Header
    leftIcon="arrow-back"
    title="Add Mantra"
    rightText={enableSave ? 'Save' : null}
    leftButtonOnPress={back}
    rightButtonOnPress={save}
  />
);

CharacterCount.propTypes = {
  enableSave: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
};

export default CharacterCount;

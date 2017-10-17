import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/SuggestionsHeader/SuggestionsHeader.style';

/**
 * The Suggestions Header component, basically just some styled text
 *
 * @param {string} text The text to display
 * @return {Component} JSX component
 */
const SuggestionsHeader = ({ text }) => (
  <Text style={style.description}>{text}</Text>
);

SuggestionsHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SuggestionsHeader;

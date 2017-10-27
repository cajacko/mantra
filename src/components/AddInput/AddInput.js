import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/AddInput/AddInput.style';

/**
 * The text input for writing a new mantra
 *
 * @type {Class}
 */
class AddInput extends Component {
  /**
   * Initiate the class, bind the methods.
   *
   * @param  {Object} props The passed component props
   * @return {Void}       No return value
   */
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * When the input changes, pass the text to the handler
   *
   * @param  {Event} event The event object from the input
   * @return {Void}       No return value
   */
  onChange(event) {
    this.props.onChange(event.nativeEvent.text);
  }

  /**
   * Render the component
   *
   * @return {Component} React component to render
   */
  render() {
    return (
      <View style={style.container}>
        <TextInput
          autoGrow
          numberOfLines={4}
          autoCapitalize="sentences"
          style={style.text}
          onChange={this.onChange}
          value={this.props.value}
          placeholder="Mantra Title"
          placeholderTextColor={style.placeholderColor}
          multiline
          autoFocus
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

AddInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddInput;

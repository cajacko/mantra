import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/Add/Title/Title.style';

/**
 * The text input for writing a new mantra
 *
 * @type {Class}
 */
class Title extends Component {
  render() {
    return (
      <View style={style.container}>
        <TextInput
          autoGrow
          numberOfLines={4}
          autoCapitalize="sentences"
          style={style.text}
          onChangeText={this.props.onChange}
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

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;

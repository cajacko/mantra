import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/AddInput/AddInput.style';

class AddInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.nativeEvent.text);
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput
          style={style.text}
          onChange={this.onChange}
          value={this.props.value}
          placeholder="Mantra Title"
          placeholderTextColor={style.placeholderColor}
          multiline
          autoFocus
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

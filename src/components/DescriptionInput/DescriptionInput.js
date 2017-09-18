import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/DescriptionInput/DescriptionInput.style';

class DescriptionInput extends Component {
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
          placeholder="Description..."
          placeholderTextColor={style.placeholderColor}
          multiline
          autoFocus
        />
      </View>
    );
  }
}

DescriptionInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DescriptionInput;

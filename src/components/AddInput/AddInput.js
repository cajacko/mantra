import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

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
      <TextInput
        onChange={this.onChange}
        value={this.props.value}
        placeholder="Mantra Title"
        multiline
      />
    );
  }
}

AddInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddInput;

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/AddInput/AddInput.style';

class AddInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 40,
    };

    this.onChange = this.onChange.bind(this);
    this.onContentSizeChange = this.onContentSizeChange.bind(this);
  }

  onContentSizeChange(event) {
    console.log(event.nativeEvent);

    this.setState({ height: event.nativeEvent.contentSize.height });
  }

  onChange(event) {
    this.props.onChange(event.nativeEvent.text);
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput
          onContentSizeChange={this.onContentSizeChange}
          style={{ ...style.text, height: this.state.height }}
          onChange={this.onChange}
          value={this.props.value}
          editable
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

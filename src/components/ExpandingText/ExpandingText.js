import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

class ExpandingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.transformText(this.props.text),
      titleHeight: this.props.minHeight,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event) {
    this.setState({
      text: this.transformText(event.nativeEvent.text),
      titleHeight: event.nativeEvent.contentSize.height,
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.state.text);
    }
  }

  transformText(input) {
    let text = input;

    if (!this.props.multiline) {
      text = text.replace('\n', '');
    }

    return text;
  }

  render() {
    return (
      <TextInput
        style={[this.props.style, { height: this.state.titleHeight }]}
        onChange={this.onTitleChange}
        value={this.state.text}
        placeholder={this.props.placeholder}
        multiline
      />
    );
  }
}

ExpandingText.propTypes = {
  text: PropTypes.string.isRequired,
  minHeight: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  multiline: PropTypes.bool,
  style: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
};

ExpandingText.defaultProps = {
  onChange: () => {},
  multiline: false,
  style: null,
};

export default ExpandingText;

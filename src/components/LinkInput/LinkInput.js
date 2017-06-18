import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, TextInput } from 'react-native';
import styles from 'constants/styles';

class LinkInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      url: this.props.url,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
  }

  onTitleChange(event) {
    this.setState({
      title: event.nativeEvent.text,
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.state);
    }
  }

  onUrlChange(event) {
    this.setState({
      url: event.nativeEvent.text,
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.state);
    }
  }

  render() {
    return (
      <View style={styles.linkEdit}>
        <View style={styles.linkInputWrapper}>
          <TextInput
            style={styles.linkInput}
            onChange={this.onTitleChange}
            value={this.state.title}
            placeholder="Link Title: Listen more"
          />
        </View>

        <View style={styles.linkInputWrapper}>
          <TextInput
            style={styles.linkInput}
            onChange={this.onUrlChange}
            value={this.state.url}
            placeholder="URL: http://example.com"
          />
        </View>

        <TouchableWithoutFeedback onPress={this.props.delete} onPressIn={this.addOn} onPressOut={this.addOff}>
          <View>
            <Text style={styles.deleteLinkButton}>Delete Link</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default LinkInput;

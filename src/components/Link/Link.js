import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'components/Link/Link.style';

class Link extends Component {
  constructor(props) {
    super(props);

    this.state = { highlight: false };
    this.touchOn = this.touchOn.bind(this);
    this.touchOff = this.touchOff.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPress(this.props.url);
    this.setState({ highlight: false });
  }

  touchOn() {
    this.setState({ highlight: true });
  }

  touchOff() {
    this.setState({ highlight: false });
  }

  render() {
    const linkStyles = [styles.link];
    const linkTextStyles = [styles.linkText];

    if (this.props.last) {
      linkStyles.push(styles.linkLast);
    }

    if (this.state.highlight) {
      linkTextStyles.push(styles.linkTextHighlight);
    }

    return (
      <View style={linkStyles}>
        <Text style={styles.linkBullet}>-</Text>
        <TouchableWithoutFeedback
          onPress={this.onPress}
          onPressIn={this.touchOn}
          onPressOut={this.touchOff}
        >
          <View>
            <Text style={linkTextStyles}>{this.props.title}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Link;

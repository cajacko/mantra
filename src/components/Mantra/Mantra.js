/* eslint max-lines: 0 */

import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import Link from 'components/Link/Link';
import styles from 'components/Mantra/Mantra.style';
import { lastID } from 'constants/data';

class Mantra extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlight: false,
      showContent: false,
      editHighlight: false,
      removeHighlight: false,
    };

    this.touchOn = this.touchOn.bind(this);
    this.touchOff = this.touchOff.bind(this);
    this.onPress = this.onPress.bind(this);
    this.editTouchOn = this.editTouchOn.bind(this);
    this.editTouchOff = this.editTouchOff.bind(this);
    this.editOnPress = this.editOnPress.bind(this);
    this.removeTouchOn = this.removeTouchOn.bind(this);
    this.removeTouchOff = this.removeTouchOff.bind(this);
    this.removeOnPress = this.removeOnPress.bind(this);
    this.goToUrl = this.goToUrl.bind(this);
  }

  onPress() {
    this.setState({ showContent: !this.state.showContent });
  }

  // eslint-disable-next-line
  goToUrl(url) {
    // eslint-disable-next-line
    console.log('GO TO URL', url);
  }

  touchOn() {
    this.setState({ highlight: true });
  }

  touchOff() {
    this.setState({ highlight: false });
  }

  editOnPress() {
    // eslint-disable-next-line
    console.log('EDIT MANTRA');
    this.props.switchView('edit', { mantra: this.props.id });
  }

  editTouchOn() {
    this.setState({ editHighlight: true });
  }

  editTouchOff() {
    this.setState({ editHighlight: false });
  }

  // eslint-disable-next-line
  removeOnPress() {
    // eslint-disable-next-line
    console.log('REMOVE MANTRA');
  }

  removeTouchOn() {
    this.setState({ removeHighlight: true });
  }

  removeTouchOff() {
    this.setState({ removeHighlight: false });
  }

  render() {
    const mantraStyles = [styles.mantra];

    if (this.props.id === 0) {
      mantraStyles.push(styles.mantraFirst);
    }

    if (this.props.id === lastID) {
      mantraStyles.push(styles.mantraLast);
    }

    const containerStyles = [styles.mantraContainer];

    if (this.state.highlight && !this.props.showContent) {
      containerStyles.push(styles.mantraContainerHighlight);
    }

    const editButtonStyle = [styles.editButton];

    if (this.state.editHighlight) {
      editButtonStyle.push(styles.editButtonHighlight);
    }

    const removeButtonStyle = [styles.removeButton];

    if (this.state.removeHighlight) {
      removeButtonStyle.push(styles.removeButtonHighlight);
    }

    const contentContainerStyle = [styles.contentContainer];

    let content;

    if (this.state.showContent) {
      containerStyles.push(styles.mantraContainerWithContent);
      containerStyles.push(styles.mantraContainerHighlight);
      contentContainerStyle.push(styles.contentContainerShow);

      if (this.state.highlight) {
        containerStyles.push(styles.mantraContainerContentHighlight);
      }

      let links = 0;

      content = (
        <View style={contentContainerStyle}>
          <View style={styles.borderBottom}>
            <View>
              <Text style={styles.description}>{this.props.description}</Text>
            </View>
          </View>
          <View style={styles.borderBottom}>
            {
              this.props.links.map(({ title, url }) => {
                let last = false;
                links += 1;

                if (links === this.props.links.length) {
                  last = true;
                }

                return (
                  <Link
                    key={title}
                    title={title}
                    url={url}
                    last={last}
                    onPress={this.goToUrl}
                  />
                );
              })
            }
          </View>
          <View style={styles.editFooter}>
            <TouchableWithoutFeedback
              onPress={this.editOnPress}
              onPressIn={this.editTouchOn}
              onPressOut={this.editTouchOff}
            >
              <View style={styles.editButtonView}>
                <Text style={editButtonStyle}>Edit</Text>
              </View>
            </TouchableWithoutFeedback>
            <Text style={styles.editDivider}>|</Text>
            <TouchableWithoutFeedback
              onPress={this.removeOnPress}
              onPressIn={this.removeTouchOn}
              onPressOut={this.removeTouchOff}
            >
              <View style={styles.removeButtonView}>
                <Text style={removeButtonStyle}>Remove</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      );
    }

    return (
      <View style={mantraStyles}>
        <TouchableWithoutFeedback
          onPress={this.onPress}
          onPressIn={this.touchOn}
          onPressOut={this.touchOff}
          delayPressIn={100}
        >
          <View style={containerStyles}>
            <Text style={styles.mantraTitle}>{this.props.title}</Text>
          </View>
        </TouchableWithoutFeedback>
        {content}
      </View>
    );
  }
}

Mantra.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
  description: PropTypes.string.isRequired,
  showContent: PropTypes.bool,
  switchView: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

Mantra.defaultProps = {
  showContent: false,
};

export default Mantra;

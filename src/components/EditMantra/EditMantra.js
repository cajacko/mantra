import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'components/EditMantra/EditMantra.style';
import LinkInput from 'components/LinkInput/LinkInput';
import ExpandingText from 'components/ExpandingText/ExpandingText';

class EditMantra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Listen to my \nwords you fool of a took',
      links: [
        { id: 0, title: 'I am a link 0', url: 'http://wikipedia.com' },
        { id: 1, title: 'I am a link 1', url: 'http://wikipedia.com' },
      ],
    };

    this.addLink = this.addLink.bind(this);
    this.deleteLink = this.deleteLink.bind(this);
  }

  addLink() {
    const links = this.state.links;
    links.push({
      title: '',
      url: '',
    });

    this.setState({ links });
  }

  deleteLink(linkId) {
    const links = Object.assign([], this.state.links);

    links.forEach(({ id }, i) => {
      if (linkId === id) {
        links.splice(i, 1);
      }
    });

    this.setState({ links });
  }

  render() {
    let links;

    if (this.state.links.length) {
      links = (
        <View>
          {
            this.state.links.map(({ id, title, url }) => (
              <LinkInput
                key={id}
                title={title}
                url={url}
                delete={() => this.deleteLink(id)}
              />
            ))
          }
        </View>
      );
    }

    return (
      <ScrollView style={styles.editScroll}>
        <View style={styles.editContent}>
          <ExpandingText
            style={styles.titleInput}
            text={this.state.text}
            placeholder="Mantra Title"
            minHeight={92}
          />

          <ExpandingText
            style={styles.contentInput}
            text={this.state.text}
            placeholder="Add a description in here"
            multiline
            minHeight={200}
          />

          <Text style={styles.linkTitle}>Links</Text>

          {links}

          <TouchableWithoutFeedback
            onPress={this.addLink}
            onPressIn={this.addOn}
            onPressOut={this.addOff}
          >
            <View>
              <Text style={styles.addLinkButton}>Add Link</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => this.props.switchView('loop')}
            onPressIn={this.addOn}
            onPressOut={this.addOff}
          >
            <View>
              <Text style={styles.deleteMantra}>Delete Mantra</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    );
  }
}

EditMantra.propTypes = {
  switchView: PropTypes.func.isRequired,
};

export default EditMantra;

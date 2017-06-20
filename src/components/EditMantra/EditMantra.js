import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from 'constants/styles';
import LinkInput from 'components/LinkInput/LinkInput';
import ExpandingText from 'components/ExpandingText/ExpandingText';

class EditMantra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Listen to my \nwords you fool of a took',
      links: [
        { title: 'I am a link', url: 'http://wikipedia.com' },
        { title: 'I am a link', url: 'http://wikipedia.com' },
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

  deleteLink(id) {
    const links = this.state.links;
    links.splice(id, 1);
    this.setState({ links });
  }

  render() {
    let links;
    let linkKey = -1;

    if (this.state.links.length) {
      links = (
        <View>
          {
            this.state.links.map(({ title, url }) => {
              linkKey += 1;
              return (
                <LinkInput key={linkKey} title={title} url={url} delete={() => this.deleteLink(linkKey)}/>
              );
            })
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
            multiline={true}
            minHeight={200}
          />

          <Text style={styles.linkTitle}>Links</Text>

          {links}

          <TouchableWithoutFeedback onPress={this.addLink} onPressIn={this.addOn} onPressOut={this.addOff}>
            <View>
              <Text style={styles.addLinkButton}>Add Link</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => this.props.switchView('loop')} onPressIn={this.addOn} onPressOut={this.addOff}>
            <View>
              <Text style={styles.deleteMantra}>Delete Mantra</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    );
  }
}

export default EditMantra;

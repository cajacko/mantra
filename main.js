import React, { Component } from 'react';
import { Text, ListView, View, StyleSheet, TouchableWithoutFeedback, ScrollView, TextInput } from 'react-native';
import { Constants } from 'expo';
import Expo from 'expo';

const mantra = [];
let lastID;

for (let i = 0; i < 20; i += 1) {
  mantra.push({
    id: i,
    title: `I am Mantra woo ${i}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    links: [
      { title: 'Link 1', url: 'http://wikipedia.com' },
      { title: 'Link 2', url: 'http://wikipedia.com' },
    ],
  });

  lastID = i;
}

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
    this.removeTouchOn= this.removeTouchOn.bind(this);
    this.removeTouchOff = this.removeTouchOff.bind(this);
    this.removeOnPress = this.removeOnPress.bind(this);
    this.goToUrl = this.goToUrl.bind(this);
  }

  goToUrl(url) {
    console.log('GO TO URL', url);
  }

  onPress() {
    this.setState({ showContent: !this.state.showContent });
  }

  touchOn() {
    this.setState({ highlight: true });
  }

  touchOff() {
    this.setState({ highlight: false });
  }

  editOnPress() {
    console.log('EDIT MANTRA');
    this.props.switchView('edit', { mantra: this.props.id });
  }

  editTouchOn() {
    this.setState({ editHighlight: true });
  }

  editTouchOff() {
    this.setState({ editHighlight: false });
  }

  removeOnPress() {
    console.log('REMOVE MANTRA');
  }

  removeTouchOn() {
    this.setState({ removeHighlight: true });
  }

  removeTouchOff() {
    this.setState({ removeHighlight: false });
  }

  render() {
    let mantraStyles = [styles.mantra];

    if (this.props.id === 0) {
      mantraStyles.push(styles.mantraFirst);
    }

    if (this.props.id === lastID) {
      mantraStyles.push(styles.mantraLast);
    }

    let containerStyles = [styles.mantraContainer];

    if (this.state.highlight && !this.props.showContent) {
      containerStyles.push(styles.mantraContainerHighlight);
    }

    let editButtonStyle = [styles.editButton];

    if (this.state.editHighlight) {
      editButtonStyle.push(styles.editButtonHighlight);
    }

    let removeButtonStyle = [styles.removeButton];

    if (this.state.removeHighlight) {
      removeButtonStyle.push(styles.removeButtonHighlight);
    }

    let contentContainerStyle = [styles.contentContainer];

    let content;

    if (this.state.showContent) {
      containerStyles.push(styles.mantraContainerWithContent);
      containerStyles.push(styles.mantraContainerHighlight);
      contentContainerStyle.push(styles.contentContainerShow);

      if (this.state.highlight) {
        containerStyles.push(styles.mantraContainerContentHighlight);
      }

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

                return <Link key={title} title={title} url={url} last={last} onPress={this.goToUrl} />
              })
            }
          </View>
          <View style={styles.editFooter}>
            <TouchableWithoutFeedback onPress={this.editOnPress} onPressIn={this.editTouchOn} onPressOut={this.editTouchOff}>
              <View>
                <Text style={editButtonStyle}>Edit</Text>
              </View>
            </TouchableWithoutFeedback>
            <Text style={styles.editDivider}>|</Text>
            <TouchableWithoutFeedback onPress={this.removeOnPress} onPressIn={this.removeTouchOn} onPressOut={this.removeTouchOff}>
              <View>
                <Text style={removeButtonStyle}>Remove</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      );
    }

    let links = 0;

    return (
      <View style={mantraStyles}>
        <TouchableWithoutFeedback onPress={this.onPress} onPressIn={this.touchOn} onPressOut={this.touchOff} delayPressIn={100}>
          <View style={containerStyles}>
            <Text style={styles.mantraTitle}>{this.props.title}</Text>
          </View>
        </TouchableWithoutFeedback>
        {content}
      </View>
    );
  }
}

class LoopView extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(mantra),
      addHighlight: false,
    };

    this.add = this.add.bind(this);
    this.addOn = this.addOn.bind(this);
    this.addOff = this.addOff.bind(this);
  }

  add() {
    this.props.switchView('edit', { add: true });
  }

  addOn() {
    this.setState({ addHighlight: true });
  }

  addOff() {
    this.setState({ addHighlight: false });
  }

  render() {
    let addButtonStyles = [styles.addButton];

    if (this.state.addHighlight) {
      addButtonStyles.push(styles.addButtonHighlight);
    }

    return (
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={({ id, title, description, links }) => (
            <Mantra
              key={id}
              id={id}
              title={title}
              description={description}
              links={links}
              switchView={this.props.switchView}
            />
          )}
        />
        <TouchableWithoutFeedback onPress={this.add} onPressIn={this.addOn} onPressOut={this.addOff}>
          <View style={addButtonStyles}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

class EditNav extends Component {
  render() {
    return (
      <View style={styles.editNav}>
        <TouchableWithoutFeedback onPress={() => this.props.switchView('loop')} onPressIn={this.addOn} onPressOut={this.addOff}>
          <View>
            <Text style={styles.editNavText}>Back</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.props.switchView('loop')} onPressIn={this.addOn} onPressOut={this.addOff}>
          <View>
            <Text style={styles.editNavText}>Save</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

class ExpandingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.transformText(this.props.text),
      titleHeight: this.props.minHeight,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
  }

  transformText(input) {
    let text = input;

    if (!this.props.multiline) {
      text = text.replace('\n', '');
    }

    return text;
  }

  onTitleChange(event) {
    this.setState({
      text: this.transformText(event.nativeEvent.text),
      titleHeight: event.nativeEvent.contentSize.height,
    });

    this.props.onChange(this.state.text);
  }

  render() {
    return (
      <TextInput
        style={[this.props.style, { height: this.state.titleHeight }]}
        onChange={this.onTitleChange}
        value={this.state.text}
        placeholder={this.props.placeholder}
        multiline={true}
      />
    );
  }
}

class LinkInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      url: this.props.url,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event) {
    this.setState({
      title: event.nativeEvent.text,
    });

    this.props.onChange(this.state);
  }

  onUrlChange(event) {
    this.setState({
      url: event.nativeEvent.text,
    });

    this.props.onChange(this.state);
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

class EditMantra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Listen to my \nwords you fool of a took',
      links: [
        { title: 'I am a link', url: 'http://wikipedia.com'},
        { title: 'I am a link', url: 'http://wikipedia.com'},
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

class EditView extends Component {
  render() {
    return (
      <View style={styles.edit}>
        <EditNav switchView={this.props.switchView} />
        <EditMantra />
      </View>
    )
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = { view: 'loop', props: {} };

    this.switchView = this.switchView.bind(this);
  }

  switchView(view, props = {}) {
    this.setState({ view, props });
  }

  render() {
    if (this.state.view === 'edit') {
      return <EditView switchView={this.switchView} {...this.state.props} />
    }

    return <LoopView switchView={this.switchView} {...this.state.props} />;
  }
}

const styles = StyleSheet.create({
  linkTitle: {
    fontSize: 30,
    paddingBottom: 20,
  },

  linkEdit: {
    marginBottom: 30,
  },

  linkInput: {
    height: 30,
    fontSize: 20,
  },

  linkInputWrapper: {
    borderWidth: 1,
    borderColor: '#cecece',
    padding: 5,
  },

  addLinkButton: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#dedede',
    borderColor: '#cecece',
    borderWidth: 1,
    width: 160,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },

  deleteMantra: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#dedede',
    borderColor: '#cecece',
    borderWidth: 1,
    width: 160,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },

  deleteLinkButton: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#dedede',
    borderColor: '#cecece',
    borderWidth: 1,
    textAlign: 'center',
  },

  edit: {
    flex: 1,
  },

  titleInput: {
    fontSize: 30,
  },

  contentInput: {
    marginTop: 20,
    fontSize: 20,
  },

  editContent: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 20,
  },

  editNav: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#dedede',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#cecece',
  },

  editNavText: {
    fontSize: 20,
    padding: 10,
  },

  editScroll: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },

  list: {},

  mantra: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#dedede',
    overflow: 'hidden',
  },

  mantraContainer: {
    padding: 20,
    backgroundColor: '#fafafa',
  },

  mantraContainerHighlight: {
    backgroundColor: '#dedede',
  },

  mantraContainerContentHighlight: {
    backgroundColor: '#fafafa',
  },

  mantraContainerWithContent: {
    borderBottomWidth: 1,
    borderColor: '#dedede',
  },

  mantraFirst: {
    borderTopWidth: 1,
  },

  mantraLast: {
    marginBottom: 100,
  },

  mantraTitle: {
    fontSize: 20,
  },

  description: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
  },

  link: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
  },

  linkBullet: {
    fontSize: 16,
    marginRight: 10,
  },

  linkText: {
    flex: 1,
    fontSize: 16,
    color: '#0065a2',
    textDecorationLine: 'underline',
  },

  linkTextHighlight: {
    color: 'black',
  },

  linkLast: {
    paddingBottom: 0,
  },

  editFooter: {
    flex: 1,
    flexDirection: 'row',
  },

  editButton: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#8e8e8e',
  },

  editButtonHighlight: {
    color: 'black',
  },

  removeButton: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#8e8e8e',
  },

  removeButtonHighlight: {
    color: 'black',
  },

  editDivider: {
    fontSize: 20,
    color: '#8e8e8e',
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#dedede',
    paddingBottom: 20,
    marginBottom: 20,
  },

  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    backgroundColor: '#FFEB3B',
    borderWidth: 2,
    borderColor: '#fde400',
    borderRadius: 60,
    shadowOffset: { width: -2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonHighlight: {
    backgroundColor: '#bdaa00',
    borderColor: '#b5a300',
  },

  addButtonText: {
    fontSize: 30,
    lineHeight: 30,
  },

  contentContainer: {
    padding: 20,
    position: 'absolute',
  },

  contentContainerShow: {
    position: 'relative',
  },
});

Expo.registerRootComponent(App);

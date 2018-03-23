/* eslint max-lines: 0 */
import React, { PureComponent } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  List,
  ListItem,
  Icon,
  Text,
  Button,
} from 'native-base';
import PropTypes from 'prop-types';
import StatusPadding from 'components/UI/StatusPadding';
import Header from 'components/UI/Header';
import style from 'components/scenes/Add/Source/Source.style';
import SourceSuggestions from 'components/SourceSuggestions';

class AddSource extends PureComponent {
  render() {
    const noSource =
      (!this.props.title || !this.props.title.length) &&
      (!this.props.link || !this.props.link.length);

    const autoFocus = !this.props.title || !this.props.title.length;

    return (
      <Container>
        <StatusPadding androidOnly />
        <Header
          leftIcon="arrow-back"
          title="Add Source"
          rightTextFaded={this.props.areInputsSame}
          rightText="Save"
          leftButtonOnPress={this.props.goBack}
          rightButtonOnPress={this.props.save}
        />
        <Content>
          <Form>
            <Item stackedLabel error={this.props.titleError}>
              <Label>Source Title</Label>
              <Input
                value={this.props.title}
                onChangeText={this.props.onChange('title')}
                autoFocus={autoFocus}
                autoCapitalize="words"
              />
            </Item>
            <Item stackedLabel error={this.props.linkError}>
              <Label>Source Link</Label>
              <Input
                value={this.props.link}
                onChangeText={this.props.onChange('link')}
                autoCorrect={false}
                keyboardType="url"
                autoCapitalize="none"
              />
            </Item>

            <Button
              small
              iconLeft
              light
              onPress={this.props.clear}
              disabled={noSource}
              style={style.clear}
            >
              <Icon name="close" />
              <Text>Clear</Text>
            </Button>
          </Form>

          <List button style={style.meta}>
            <ListItem itemDivider>
              <Text>Suggestions</Text>
            </ListItem>
            <SourceSuggestions
              suggestions={this.props.suggestions}
              addSuggestion={this.props.addSuggestion}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

AddSource.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  titleError: PropTypes.bool.isRequired,
  linkError: PropTypes.bool.isRequired,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  addSuggestion: PropTypes.func.isRequired,
  areInputsSame: PropTypes.bool.isRequired,
};

AddSource.defaultProps = {
  link: null,
};

export default AddSource;

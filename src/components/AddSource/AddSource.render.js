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
  Left,
  Icon,
  Body,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';
import StatusPadding from 'components/UI/StatusPadding';
import Header from 'components/Header';
import style from 'components/AddSource/AddSource.style';
import SourceSuggestions from 'components/SourceSuggestions';
import inputLabelProps from 'components/AddSource/helpers/inputLabelProps';

class AddSource extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      titleProps: inputLabelProps(props.title),
      linkProps: inputLabelProps(props.link),
    };
  }

  render() {
    return (
      <Container>
        <StatusPadding androidOnly />
        <Header
          leftIcon="arrow-back"
          title="Add Source"
          rightTextColor={
            this.props.areInputsSame ? style.saveSameColor : undefined
          }
          rightText="Save"
          leftButtonOnPress={this.props.goBack}
          rightButtonOnPress={this.props.save}
        />
        <Content>
          <Form>
            <Item {...this.state.titleProps} error={this.props.titleError}>
              <Label>Source Title</Label>
              <Input
                value={this.props.title}
                onChangeText={this.props.onChange('title')}
              />
            </Item>
            <Item {...this.state.linkProps} error={this.props.linkError}>
              <Label>Source Link</Label>
              <Input
                value={this.props.link}
                onChangeText={this.props.onChange('link')}
                autoCorrect={false}
                keyboardType="url"
                autoCapitalize="none"
              />
            </Item>
          </Form>

          <List button style={style.meta}>
            <ListItem icon onPress={this.props.clear} first last>
              <Left>
                <Icon name="close" />
              </Left>
              <Body>
                <Text>Clear</Text>
              </Body>
            </ListItem>
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
  link: PropTypes.string.isRequired,
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
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  addSuggestion: PropTypes.func.isRequired,
  areInputsSame: PropTypes.bool.isRequired,
};

export default AddSource;

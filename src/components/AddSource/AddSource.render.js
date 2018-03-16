import React from 'react';
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

const AddSource = ({
  title,
  link,
  onChange,
  goBack,
  save,
  clear,
  titleError,
  linkError,
  suggestions,
  addSuggestion,
}) => (
  <Container>
    <StatusPadding androidOnly />
    <Header
      leftIcon="arrow-back"
      title="Add Source"
      rightText="Save"
      leftButtonOnPress={goBack}
      rightButtonOnPress={save}
    />
    <Content>
      <Form>
        <Item floatingLabel error={titleError}>
          <Label>Source Title</Label>
          <Input value={title} onChangeText={onChange('title')} />
        </Item>
        <Item floatingLabel error={linkError}>
          <Label>Source Link</Label>
          <Input
            value={link}
            onChangeText={onChange('link')}
            autoCorrect={false}
            keyboardType="url"
            autoCapitalize="none"
          />
        </Item>
      </Form>

      <List button style={style.meta}>
        <ListItem icon onPress={clear} first last>
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
          suggestions={suggestions}
          addSuggestion={addSuggestion}
        />
      </List>
    </Content>
  </Container>
);

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
};

export default AddSource;

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

const AddSource = ({
  title,
  link,
  onChange,
  goBack,
  save,
  clear,
  titleError,
  linkError,
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
};

export default AddSource;

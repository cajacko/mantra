import React from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import PropTypes from 'prop-types';
import StatusPadding from 'components/UI/StatusPadding';
import Header from 'components/Header';

const AddSource = ({
  title,
  link,
  onChangeTitle,
  onChangeLink,
  goBack,
  save,
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
        <Item floatingLabel>
          <Label>Source Title</Label>
          <Input value={title} onChangeText={onChangeTitle} />
        </Item>
        <Item floatingLabel last>
          <Label>Source Link</Label>
          <Input value={link} onChangeText={onChangeLink} />
        </Item>
      </Form>
    </Content>
  </Container>
);

AddSource.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeLink: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};

export default AddSource;

import React from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import StatusPadding from 'components/UI/StatusPadding';
import Header from 'components/Header';

const AddView = () => (
  <Container>
    <StatusPadding />
    <Header leftIcon="arrow-back" title="Add Source" rightText="Save" />
    <Content>
      <Form>
        <Item floatingLabel>
          <Label>Source Title</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Source Link</Label>
          <Input />
        </Item>
      </Form>
    </Content>
  </Container>
);

export default AddView;

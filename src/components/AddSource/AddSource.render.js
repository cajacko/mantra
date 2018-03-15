import React from 'react';
import { Container, List, ListItem, Text, Icon, Left, Body } from 'native-base';
import StatusPadding from 'components/UI/StatusPadding';

const AddView = () => (
  <Container>
    <StatusPadding />
    <List button>
      <ListItem icon onPress={() => {}} first last>
        <Left>
          <Icon name="link" />
        </Left>
        <Body>
          <Text>Add Source</Text>
        </Body>
      </ListItem>
    </List>
  </Container>
);

export default AddView;

import React from 'react';
import { List, ListItem, Text, Icon, Left, Body } from 'native-base';

const AddView = () => (
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
);

export default AddView;

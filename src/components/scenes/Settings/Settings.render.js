import React from 'react';
import {
  Container,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
} from 'native-base';

const SceneSettings = ({ prefillSource, changeSetting }) => (
  <Container>
    <Content>
      <ListItem>
        <CheckBox
          checked={prefillSource}
          onPress={() => changeSetting('prefillSource')(!prefillSource)}
        />
        <Body>
          <Text>
            Prefill the source of a new mantra entry with the last used source
          </Text>
        </Body>
      </ListItem>
    </Content>
  </Container>
);

export default SceneSettings;

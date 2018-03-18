import React from 'react';
import PropTypes from 'prop-types';
import { Left, Icon, ListItem, Text, Body } from 'native-base';

const MenuItem = ({ action, title, icon }) => (
  <ListItem icon onPress={action}>
    <Left>
      <Icon name={icon} />
    </Left>
    <Body>
      <Text>{title}</Text>
    </Body>
  </ListItem>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default MenuItem;

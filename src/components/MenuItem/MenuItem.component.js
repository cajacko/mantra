import React from 'react';
import PropTypes from 'prop-types';
import { Left, Icon, ListItem, Text, Body } from 'native-base';
import { WHITE } from 'constants/colours';

const MenuItem = ({ action, title, icon }) => (
  <ListItem icon onPress={action}>
    <Left>
      <Icon name={icon} style={{ color: WHITE }} />
    </Left>
    <Body>
      <Text style={{ color: WHITE }}>{title}</Text>
    </Body>
  </ListItem>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default MenuItem;

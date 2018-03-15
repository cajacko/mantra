import React from 'react';
import {
  Header,
  Body,
  Title,
  Left,
  Button,
  Icon,
  Right,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';

const HeaderComponent = ({ leftIcon, title, rightText }) => (
  <Header>
    {leftIcon && (
      <Left>
        <Button transparent>
          <Icon name={leftIcon} />
        </Button>
      </Left>
    )}
    {title && (
      <Body>
        <Title>Add Source</Title>
      </Body>
    )}
    {rightText && (
      <Right>
        <Button transparent>
          <Text>Save</Text>
        </Button>
      </Right>
    )}
  </Header>
);

HeaderComponent.propTypes = {
  leftIcon: PropTypes.string,
  title: PropTypes.string,
  rightText: PropTypes.string,
};

HeaderComponent.defaultProps = {
  leftIcon: null,
  title: null,
  rightText: null,
};

export default HeaderComponent;

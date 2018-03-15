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

const HeaderComponent = ({
  leftIcon,
  leftButtonOnPress,
  title,
  rightText,
  rightButtonOnPress,
}) => (
  <Header>
    {leftIcon && (
      <Left>
        <Button transparent onPress={leftButtonOnPress}>
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
        <Button transparent onPress={rightButtonOnPress}>
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
  leftButtonOnPress: PropTypes.func,
  rightButtonOnPress: PropTypes.func,
};

HeaderComponent.defaultProps = {
  leftIcon: null,
  title: null,
  rightText: null,
  leftButtonOnPress: null,
  rightButtonOnPress: null,
};

export default HeaderComponent;

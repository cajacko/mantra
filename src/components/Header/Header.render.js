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
  rightTextColor,
}) => (
  <Header>
    <Left>
      {leftIcon && (
        <Button transparent onPress={leftButtonOnPress}>
          <Icon name={leftIcon} />
        </Button>
      )}
    </Left>

    <Body>{title && <Title>{title}</Title>}</Body>

    <Right>
      {rightText && (
        <Button transparent onPress={rightButtonOnPress}>
          <Text style={rightTextColor ? { color: rightTextColor } : {}}>
            Save
          </Text>
        </Button>
      )}
    </Right>
  </Header>
);

HeaderComponent.propTypes = {
  leftIcon: PropTypes.string,
  title: PropTypes.string,
  rightText: PropTypes.string,
  leftButtonOnPress: PropTypes.func,
  rightButtonOnPress: PropTypes.func,
  rightTextColor: PropTypes.string,
};

HeaderComponent.defaultProps = {
  leftIcon: null,
  title: null,
  rightText: null,
  leftButtonOnPress: null,
  rightButtonOnPress: null,
  rightTextColor: null,
};

export default HeaderComponent;

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
  rightTextFaded,
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
          <Text style={rightTextFaded ? { opacity: 0.5 } : {}}>Save</Text>
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
  rightTextFaded: PropTypes.bool,
};

HeaderComponent.defaultProps = {
  leftIcon: null,
  title: null,
  rightText: null,
  leftButtonOnPress: null,
  rightButtonOnPress: null,
  rightTextFaded: false,
};

export default HeaderComponent;

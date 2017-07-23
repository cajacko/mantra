import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from 'components/EmptyView/EmptyView.style';
import Button from 'components/Button/Button';

const EmptyView = ({ add, hasVisibleMantra, children }) => {
  const message = 'You don\'t have any mantras yet!';

  if (hasVisibleMantra) {
    return children;
  }

  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <View style={style.wrapper}>
        <Text style={style.noneMessage}>{message}</Text>
        <View style={style.addButton}>
          <Button onPress={add} text="Add one now" theme="default" />
        </View>
      </View>
    </View>
  );
};

EmptyView.propTypes = {
  add: PropTypes.func.isRequired,
  hasVisibleMantra: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
};

export default EmptyView;

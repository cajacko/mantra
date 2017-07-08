import React from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import DisplayNav from 'components/DisplayNav/DisplayNav';
import DisplayMantra from 'containers/DisplayMantra/DisplayMantra';
import Item from 'containers/Item/Item';
import style from 'components/DisplayView/DisplayView.style';

const DisplayView = ({ prev, next, mantraId, showNav, add }) => {
  let prevElement;
  let nextElement;
  let content;

  if (showNav) {
    prevElement = <DisplayNav icon="ios-arrow-back-outline" action={prev} />;
    nextElement = <DisplayNav icon="ios-arrow-forward-outline" action={next} />;
  }

  if (mantraId) {
    content = (
      <View style={style.wrapper}>
        {prevElement}
        <Item itemId={mantraId} element={DisplayMantra} />
        {nextElement}
      </View>
    );
  } else {
    const message = 'You don\'t have any mantras yet!';
    content = (
      <View style={style.wrapperNone}>
        <Text style={style.noneMessage}>{message}</Text>
        <View style={style.addButton}>
          <TouchableOpacity onPress={add}>
            <View style={style.addButtonWrapper}>
              <Text style={style.addButtonText}>Add one now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      {content}
    </View>
  );
};

DisplayView.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  mantraId: PropTypes.string,
  showNav: PropTypes.bool.isRequired,
  add: PropTypes.func.isRequired,
};

DisplayView.defaultProps = {
  mantraId: null,
};

export default DisplayView;

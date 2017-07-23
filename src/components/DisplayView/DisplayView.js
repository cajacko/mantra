import React from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import DisplayNav from 'components/DisplayNav/DisplayNav';
import DisplayMantra from 'containers/DisplayMantra/DisplayMantra';
import Item from 'containers/Item/Item';
import style from 'components/DisplayView/DisplayView.style';
import EmptyView from 'containers/EmptyView/EmptyView';

const DisplayView = ({ prev, next, mantraId, showNav }) => {
  let prevElement;
  let nextElement;

  if (showNav) {
    prevElement = <DisplayNav icon="ios-arrow-back-outline" action={prev} />;
    nextElement = <DisplayNav icon="ios-arrow-forward-outline" action={next} />;
  }

  return (
    <EmptyView>
      <View style={style.container}>
        <StatusBar barStyle="dark-content" />
        <View style={style.wrapper}>
          {prevElement}
          <Item itemId={mantraId} element={DisplayMantra} />
          {nextElement}
        </View>
      </View>
    </EmptyView>
  );
};

DisplayView.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  mantraId: PropTypes.string,
  showNav: PropTypes.bool.isRequired,
};

DisplayView.defaultProps = {
  mantraId: null,
};

export default DisplayView;

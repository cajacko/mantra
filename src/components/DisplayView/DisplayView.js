import React from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import DisplayNav from 'components/DisplayNav/DisplayNav';
import DisplayMantra from 'containers/DisplayMantra/DisplayMantra';
import Item from 'containers/Item/Item';
import style from 'components/DisplayView/DisplayView.style';
import EmptyView from 'containers/EmptyView/EmptyView';
import displayNavStyle from 'components/DisplayNav/DisplayNav.style';

const DisplayView = ({ mantraLoop, showsButtons }) => (
  <EmptyView>
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Swiper
        showsButtons={showsButtons}
        loadMinimal
        nextButton={<DisplayNav icon="ios-arrow-forward-outline" />}
        prevButton={<DisplayNav icon="ios-arrow-back-outline" />}
        buttonWrapperStyle={displayNavStyle.wrapper}
      >
        {
          mantraLoop.map(id => (
            <View key={id} style={style.wrapper}>
              <Item itemId={id} element={DisplayMantra} />
            </View>
          ))
        }
      </Swiper>
    </View>
  </EmptyView>
);

DisplayView.propTypes = {
  mantraLoop: PropTypes.arrayOf(PropTypes.string),
  showsButtons: PropTypes.bool,
};

DisplayView.defaultProps = {
  mantraLoop: [],
  showsButtons: false,
};

export default DisplayView;

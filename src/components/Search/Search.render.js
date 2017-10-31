import React from 'react';
import { View, TextInput } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import style from 'components/Search/Search.style';

const SearchRender = () => (
  <View style={style.container}>
    <TextInput
      autoCapitalize="sentences"
      placeholder="Search"
      underlineColorAndroid="transparent"
      style={style.input}
      placeholderColor={style.placeholderColor}
    />
    <Ionicons
      name="ios-search"
      size={style.iconSize}
      color={style.iconColour}
    />
  </View>
);

export default SearchRender;

import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import style from 'components/Search/Search.style';

const SearchRender = ({ value, buttonAction, icon }) => (
  <View style={style.container}>
    <TextInput
      autoCapitalize="sentences"
      placeholder="Search"
      underlineColorAndroid="transparent"
      style={style.input}
      placeholderColor={style.placeholderColor}
    />
    <TouchableOpacity style={style.button} onPress={buttonAction}>
      <Ionicons name={icon} size={style.iconSize} color={style.iconColour} />
    </TouchableOpacity>
  </View>
);

export default SearchRender;

import React from 'react';
import { Text, View, Image } from 'react-native';

const WelcomeView = ({ title, description, image }) => (
  <View key={title}>
    <Image source={image} />
    <Text>{title}</Text>
    <Text>{description}</Text>
  </View>
);

export default WelcomeView;

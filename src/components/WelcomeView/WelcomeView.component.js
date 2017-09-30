import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import displayNavStyle from 'components/DisplayNav/DisplayNav.style';
import style from 'components/WelcomeView/WelcomeView.style';

const welcomeScreens = [
  { title: 'Welcome to mantra', description: 'Here we are' },
  { title: 'Page 2', description: 'Yeah boi' },
  { title: 'Page 3', description: 'Woo woo' },
];

const WelcomeView = () => (
  <View style={style.container}>
    <StatusBar barStyle="dark-content" />
    <Swiper
      showsButtons={false}
      loadMinimal
      buttonWrapperStyle={displayNavStyle.wrapper}
      showsPagination
      loop={false}
    >
      {welcomeScreens.map(({ title, description, image }) => (
        <View key={title}>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </View>
      ))}
    </Swiper>
  </View>
);

export default WelcomeView;

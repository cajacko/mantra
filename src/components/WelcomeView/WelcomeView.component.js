import React from 'react';
import { View, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import displayNavStyle from 'components/DisplayNav/DisplayNav.style';
import style from 'components/WelcomeView/WelcomeView.style';
import WelcomePanel from 'components/WelcomePanel/WelcomePanel.component';

const dummyImage = require('components/WelcomeView/app.png');

const welcomeScreens = [
  { title: 'Welcome to mantra', description: 'Here we are', image: dummyImage },
  { title: 'Page 2', description: 'Yeah boi', image: dummyImage },
  { title: 'Page 3', description: 'Woo woo', image: dummyImage },
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
        <WelcomePanel
          key={title}
          title={title}
          description={description}
          image={image}
        />
      ))}
    </Swiper>
  </View>
);

export default WelcomeView;

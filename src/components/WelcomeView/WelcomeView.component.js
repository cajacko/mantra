import React, { Component } from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import displayNavStyle from 'components/DisplayNav/DisplayNav.style';
import style from 'components/WelcomeView/WelcomeView.style';
import Button from 'components/Button/Button';

const home = require('components/WelcomeView/home.jpg');
const list = require('components/WelcomeView/list.jpg');
const add = require('components/WelcomeView/add.jpg');

const welcomeScreens = [
  { title: 'Welcome to mantra', image: home },
  { title: 'Page 2', image: list },
  { title: 'Page 3', image: add },
];

// Cannot seem to have a custom Component as a child of react-native-swiper.
// Kept on breaking. So have put the actual markup in this file
class WelcomeView extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.finish = this.finish.bind(this);
  }

  next() {
    if (this.swiper && typeof this.swiper.scrollBy === 'function') {
      this.swiper.scrollBy(1, true);
    }
  }

  finish() {
    console.log('FINISH');
  }

  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle="dark-content" />
        <Swiper
          showsButtons={false}
          buttonWrapperStyle={displayNavStyle.wrapper}
          showsPagination
          loop={false}
          ref={(swiper) => {
            this.swiper = swiper;
          }}
        >
          {welcomeScreens &&
            welcomeScreens.map(({ title, description, image }, index) => (
              <View key={title} style={style.screen}>
                <Image
                  resizeMode="contain"
                  source={image}
                  style={style.image}
                />
                <View style={style.textContent}>
                  <Text style={style.title}>{title}</Text>
                  <View style={style.button}>
                    {index === welcomeScreens.length - 1 ? (
                      <Button text="Done" size="small" onPress={this.finish} />
                    ) : (
                      <Button
                        text="Next"
                        theme="dull"
                        size="small"
                        onPress={this.next}
                      />
                    )}
                  </View>
                </View>
              </View>
            ))}
        </Swiper>
      </View>
    );
  }
}

export default WelcomeView;

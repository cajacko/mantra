/* eslint max-lines: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import displayNavStyle from 'components/DisplayNav/DisplayNav.style';
import style from 'components/WelcomeView/WelcomeView.style';
import Button from 'components/Button/Button';
import Login from 'containers/Login/Login';

const home = require('components/WelcomeView/home.jpg');
const list = require('components/WelcomeView/list.jpg');
const add = require('components/WelcomeView/add.jpg');

const welcomeScreens = [
  { title: 'Write down short lessons and quotes', image: add },
  { title: 'Remember your mantra in the random slideshow', image: home },
  { title: 'Manage all your mantra from the list view', image: list },
];

/**
 * Display the welcome view, navigate between screens and dispatch action when
 * finished.
 *
 * Cannot seem to have a custom Component as a child of react-native-swiper.
 * Kept on breaking. So have put the actual markup in this file
 *
 * @type {class}
 */
class WelcomeView extends PureComponent {
  /**
   * Initialise the class and bind the methods
   *
   * @param  {object} props Props passed to the component
   * @return {void}       No return value
   */
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.finish = this.finish.bind(this);
  }

  /**
   * Go to the next swiper screen
   *
   * @return {void} No return value
   */
  next() {
    if (this.swiper && typeof this.swiper.scrollBy === 'function') {
      this.swiper.scrollBy(1, true);
    }
  }

  /**
   * Dispatch action when finished the welcome screens
   *
   * @return {void} No return value
   */
  finish() {
    this.props.finish(this.props.itemsCount);
  }

  /**
   * Render the markup and styles for the welcome screens
   *
   * @return {Coomponent} JSX component
   */
  render() {
    if (this.props.isLoggedIn === false) {
      welcomeScreens.push({ login: true });
    }

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
            welcomeScreens.map(
              ({ title, description, image, login }, index) => {
                if (login) {
                  return (
                    <View key="login" style={style.loginContainer}>
                      <Login />
                      <View style={style.loginSkipContainer}>
                        <Button
                          text="Skip"
                          size="small"
                          theme="dull"
                          onPress={this.finish}
                        />
                      </View>
                    </View>
                  );
                }

                return (
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
                          <Button
                            text="Done"
                            size="small"
                            onPress={this.finish}
                          />
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
                );
              },
            )}
        </Swiper>
      </View>
    );
  }
}

WelcomeView.propTypes = {
  finish: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  itemsCount: PropTypes.number.isRequired,
};

export default WelcomeView;

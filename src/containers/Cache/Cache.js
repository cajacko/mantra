/* eslint global-require: 0 */
import React, { Component } from 'react';
import { Image } from 'react-native';
import { AppLoading, Font, Asset } from 'expo';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { Ionicons } from '@expo/vector-icons';
// import imageMap from 'constants/imageMap';

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

class Cache extends Component {
  constructor(props) {
    super(props);
    this.state = { appIsReady: false };
  }

  componentWillMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('components/WelcomeView/home.jpg'),
      require('components/WelcomeView/list.jpg'),
      require('components/WelcomeView/add.jpg'),
    ]);

    const fontAssets = cacheFonts([Ionicons.font]);

    await Promise.all([...fontAssets, ...imageAssets]);

    this.setState({ appIsReady: true });
  }

  render() {
    if (!this.state.appIsReady) {
      return <AppLoading />;
    }

    return this.props.children;
  }
}

Cache.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Cache;

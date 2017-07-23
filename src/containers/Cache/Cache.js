import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

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
    const fontAssets = cacheFonts([Ionicons]);
    await Promise.all([...fontAssets]);

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

import React, { Component } from 'react';
import { FlatList, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import Mantra from 'containers/Mantra/Mantra';
import Item from 'containers/Item/Item';

class Mantraloop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotation: new Animated.Value(0),
    };

    this.runAnimation = this.runAnimation.bind(this);
  }

  componentDidMount() {
    this.runAnimation();
  }

  runAnimation() {
    this.state.rotation.setValue(0);

    Animated.timing(this.state.rotation, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
    }).start(() => this.runAnimation());
  }

  render() {
    let lastId;

    if (this.props.mantraLoop.length) {
      lastId = this.props.mantraLoop[this.props.mantraLoop.length - 1].key;
    }

    const spin = this.state.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <FlatList
        data={this.props.mantraLoop}
        onRefresh={this.props.onRefresh}
        refreshing={this.props.refreshing}
        renderItem={({ item }) => {
          let last = false;

          if (lastId === item.key) {
            last = true;
          }

          return (
            <Item
              key={item.key}
              itemId={item.key}
              element={Mantra}
              last={last}
              rotation={spin}
            />
          );
        }}
      />
    );
  }
}

Mantraloop.propTypes = {
  mantraLoop: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
  })).isRequired,
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default Mantraloop;

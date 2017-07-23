import React, { Component } from 'react';
import { FlatList, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import Mantra from 'containers/Mantra/Mantra';
import Item from 'containers/Item/Item';

class Mantraloop extends Component {
  constructor(props) {
    super(props);

    this.state = { rotation: new Animated.Value(0) };
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
          let initial = false;

          if (this.props.initialItems.includes(item.key)) {
            initial = true;
          }

          return (
            <Item
              key={item.key}
              itemId={item.key}
              element={Mantra}
              rotation={spin}
              initial={initial}
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
  initialItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Mantraloop;

import React, { PureComponent } from 'react';
import { FlatList, Animated, Easing, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Mantra from 'containers/Mantra/Mantra';
import Item from 'containers/Item/Item';
import style from 'components/MantraLoop/MantraLoop.style';

/**
 * The markup, styling and animation for a Mantra items
 *
 * @type {Class}
 */
class Mantraloop extends PureComponent {
  /**
   * Initialise the class, setting up rotation for all the sync icon on the
   * Mantra items, so that they all have the same rotation, rather than
   * managing it all themselves and getting out of sync
   *
   * @param  {Object} props Props passed to the component
   * @return {void}       No return type
   */
  constructor(props) {
    super(props);

    this.state = { rotation: new Animated.Value(0) };
    this.runAnimation = this.runAnimation.bind(this);
  }

  /**
   * Run the sync icon animation when the component mounts
   *
   * @return {void} No return value
   */
  componentDidMount() {
    this.runAnimation();
  }

  /**
   * Run the sync icon rotation animation
   *
   * @return {void} No return value
   */
  runAnimation() {
    this.state.rotation.setValue(0);

    Animated.timing(this.state.rotation, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
    }).start(() => this.runAnimation());
  }

  /**
   * Render the list of mantra items
   *
   * @return {component} JSX component to display
   */
  render() {
    if (this.props.noItems) {
      return (
        <View style={style.noItems}>
          <Text style={style.noItemsText}>
            Could not find any mantra to show :s
          </Text>
        </View>
      );
    }

    const spin = this.state.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <FlatList
        data={this.props.mantraLoop}
        onRefresh={this.props.hasRefresh && this.props.onRefresh}
        refreshing={this.props.hasRefresh && this.props.refreshing}
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
  mantraLoop: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
    })
  ).isRequired,
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
  initialItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  hasRefresh: PropTypes.bool.isRequired,
  noItems: PropTypes.bool.isRequired,
};

export default Mantraloop;

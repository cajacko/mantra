/* eslint max-lines: 0 */
import React, { PureComponent } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { Ionicons } from '@expo/vector-icons';
import style from 'components/Mantra/Mantra.style';
import IconButton from 'components/IconButton/IconButton.render';

/**
 * Mantra render component. Purely responsible to markup, styles and
 * if/else/loop logic. Nothing else
 * @type {class}
 */
class Mantra extends PureComponent {
  /**
   * Initialise the component and bind the methods
   *
   * @param  {Object} props Props passed ot the component
   * @return {void}       No return value
   */
  constructor(props) {
    super(props);

    this.syncStyles = this.syncStyles.bind(this);
  }

  /**
   * Logic to decide on the styles for the sync icon, with highlight and
   * rotation if syncing
   *
   * @return {Object} Object mapping the styles for the icon
   */
  syncStyles() {
    let iconColour;
    let syncStyle;

    if (this.props.showSyncIcon) {
      iconColour = style.iconColour;
      syncStyle = { ...style.icon, opacity: this.props.syncOpacity };

      if (this.props.syncing) {
        iconColour = style.iconColourSyncing;
        syncStyle = {
          ...syncStyle,
          transform: [{ rotate: this.props.rotation }],
        };
      }
    }

    return { iconColour, syncStyle };
  }

  /**
   * Render method to decide on markup and style
   * @return {jsx} Return jsx markup
   */
  render() {
    const { iconColour, syncStyle } = this.syncStyles();

    let heightStyle = {};

    if (this.props.height !== null) {
      heightStyle = { height: this.props.height };
    }

    let viewStyle = {};

    if (!this.props.initial && this.props.height === null) {
      viewStyle = {
        position: 'absolute',
        opacity: 0,
      };
    }

    const PressView = this.props.onPress ? TouchableOpacity : View;

    return (
      <View onLayout={this.props.onLayout} style={viewStyle}>
        <Animated.View style={{ overflow: 'hidden', ...heightStyle }}>
          <PressView onPress={this.props.onPress && this.props.onPress}>
            <View style={style.container}>
              {this.props.add && (
                <View style={style.add}>
                  <IconButton
                    icon="ios-add-outline"
                    onPress={this.props.add}
                    hasBackground
                  />
                </View>
              )}
              <View style={style.wrapper}>
                <Text style={style.text}>{this.props.title}</Text>
                {this.props.showSyncIcon && (
                  <Animated.View style={syncStyle}>
                    <Ionicons
                      name="ios-sync"
                      size={style.iconSize}
                      color={iconColour}
                    />
                  </Animated.View>
                )}
              </View>
              {this.props.discard && (
                <View style={style.discard}>
                  <IconButton
                    icon="ios-close-outline"
                    onPress={this.props.discard}
                    hasBackground={false}
                  />
                </View>
              )}
            </View>
          </PressView>
        </Animated.View>
      </View>
    );
  }
}

Mantra.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  syncOpacity: PropTypes.object,
  showSyncIcon: PropTypes.bool,
  height: PropTypes.number,
  title: PropTypes.string.isRequired,
  onLayout: PropTypes.func,
  onPress: PropTypes.func,
  syncing: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  rotation: PropTypes.object,
  initial: PropTypes.bool,
  discard: PropTypes.func,
  add: PropTypes.func,
};

Mantra.defaultProps = {
  rotation: null,
  height: null,
  syncOpacity: null,
  showSyncIcon: false,
  onLayout: null,
  syncing: false,
  initial: false,
  onPress: null,
  add: null,
  discard: null,
};

export default Mantra;

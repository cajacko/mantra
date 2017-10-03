/* eslint max-lines: 0 */
import React, { PureComponent } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { Ionicons } from '@expo/vector-icons';
import style from 'components/Mantra/Mantra.style';

/**
 * Mantra render component. Purely responsible to markup, styles and
 * if/else/loop logic. Nothing else
 * @type {class}
 */
class Mantra extends PureComponent {
  /**
   * Render method to decide on markup and style
   * @return {jsx} Return jsx markup
   */
  render() {
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

    return (
      <View onLayout={this.props.onLayout} style={viewStyle}>
        <Animated.View style={{ overflow: 'hidden', ...heightStyle }}>
          <TouchableOpacity onPress={this.props.onPress}>
            <View style={style.container}>
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
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

Mantra.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  syncOpacity: PropTypes.object,
  showSyncIcon: PropTypes.bool.isRequired,
  height: PropTypes.number,
  title: PropTypes.string.isRequired,
  onLayout: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  syncing: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  rotation: PropTypes.object,
  initial: PropTypes.bool.isRequired,
};

Mantra.defaultProps = {
  rotation: null,
  height: null,
  syncOpacity: null,
};

export default Mantra;

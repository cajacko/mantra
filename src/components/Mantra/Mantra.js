/* eslint max-lines: 0 */
import React, { Component } from 'react';
import { Alert, View, Text, Animated, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import style from 'components/Mantra/Mantra.style';

const outAnimationTiming = 300;
const animationTimeout = 100;

class Mantra extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: null,
      deletedManually: false,
      offlineInit: !props.online,
      syncOpacity: new Animated.Value(1),
      syncing: props.syncing,
    };

    this.height = null;

    this.deleteMantra = this.deleteMantra.bind(this);
    this.animateIn = this.animateIn.bind(this);
  }

  componentWillReceiveProps({ deletedProp, deletedState, online, syncing }) {
    if (this.state.deletedManually) {
      return;
    }

    if (deletedProp && deletedState === false) {
      this.animateOut();
    }

    if (online && !this.props.online) {
      this.hideSyncIcon();
    }

    if (this.state.syncing && !syncing && !online) {
      this.setState({ syncing: false });
    } else if (syncing && !this.state.syncing) {
      this.setState({ syncing });
    }
  }

  hideSyncIcon() {
    Animated.timing(this.state.syncOpacity, {
      toValue: 0,
      duration: outAnimationTiming,
    }).start();
  }

  animateIn() {
    if (this.state.height === null) {
      const height = this.height;

      this.setState({
        height: new Animated.Value(0),
      });

      setTimeout(() => {
        Animated.timing(this.state.height, {
          toValue: height,
          duration: outAnimationTiming,
        }).start();
      }, animationTimeout);
    }
  }

  animateOut(callback = () => {}) {
    this.setState({
      height: new Animated.Value(this.height),
    });

    setTimeout(() => {
      Animated.timing(this.state.height, {
        toValue: 0,
        duration: outAnimationTiming,
      }).start(callback);
    }, animationTimeout);
  }

  deleteMantra() {
    Alert.alert('Delete Post', 'Are you sure you want to delete this post?', [
      {
        text: 'Delete',
        onPress: () => {
          this.animateOut(() => {
            this.setState({ deletedManually: true });
            this.props.deleteMantra();
          });
        },
      },
      { text: 'Back' },
    ]);
  }

  render() {
    const containerStyles = [style.container];
    let syncIcon;

    if (this.state.offlineInit) {
      let viewStyle = { ...style.icon, opacity: this.state.syncOpacity };
      let iconColour = style.iconColour;

      if (this.state.syncing) {
        iconColour = style.iconColourSyncing;
        viewStyle = {
          ...viewStyle,
          transform: [{ rotate: this.props.rotation }],
        };
      }

      syncIcon = (
        <Animated.View style={viewStyle}>
          <Ionicons name="ios-sync" size={style.iconSize} color={iconColour} />
        </Animated.View>
      );
    }

    let heightStyle = {};

    if (this.state.height !== null) {
      heightStyle = { height: this.state.height };
    }

    let viewStyle = {};

    if (!this.props.initial && this.state.height === null) {
      viewStyle = {
        position: 'absolute',
        opacity: 0,
      };
    }

    return (
      <View
        onLayout={(event) => {
          this.height = event.nativeEvent.layout.height;

          if (this.height !== null && !this.props.initial) {
            this.animateIn();
          }
        }}
        style={viewStyle}
      >
        <Animated.View style={{ overflow: 'hidden', ...heightStyle }}>
          <TouchableOpacity onPress={this.props.editMantra}>
            <View style={containerStyles}>
              <View style={style.wrapper}>
                <Text style={style.text}>{this.props.title}</Text>
                {syncIcon}
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

Mantra.propTypes = {
  title: PropTypes.string.isRequired,
  deleteMantra: PropTypes.func.isRequired,
  online: PropTypes.bool.isRequired,
  editMantra: PropTypes.func.isRequired,
  syncing: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  rotation: PropTypes.object,
  initial: PropTypes.bool.isRequired,
  deletedProp: PropTypes.bool.isRequired,
  deletedState: PropTypes.bool.isRequired,
};

Mantra.defaultProps = {
  rotation: null,
};

export default Mantra;

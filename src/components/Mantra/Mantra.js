/* eslint max-lines: 0 */
import React, { Component } from 'react';
import { Alert, View, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';
import style from 'components/Mantra/Mantra.style';

function swipeoutBtns(deleteAction, edit) {
  return [
    { text: 'Delete', onPress: deleteAction, backgroundColor: style.deleteBackground, color: style.buttonColour },
    { text: 'Edit', onPress: edit, backgroundColor: style.editBackground, color: style.buttonColour },
  ];
}

const outAnimationTiming = 300;
const animationTimeout = 100;

class Mantra extends Component {
  constructor(props) {
    super(props);

    this.state = { height: null, deletedManually: false };
    this.height = null;

    this.deleteMantra = this.deleteMantra.bind(this);
    this.animateIn = this.animateIn.bind(this);
  }

  componentWillReceiveProps({ deletedProp, deletedState }) {
    if (this.state.deletedManually) {
      return;
    }

    if (deletedProp && deletedState === false) {
      this.animateOut();
    }
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

    if (!this.props.online) {
      let viewStyle = style.icon;

      if (this.props.syncing) {
        viewStyle = {
          ...viewStyle,
          transform: [{ rotate: this.props.rotation }],
        };
      }

      syncIcon = (
        <Animated.View style={viewStyle}>
          <Ionicons name="ios-sync" size={style.iconSize} color={style.iconColour} />
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
        <Animated.View style={{ overflow: 'hidden', ...heightStyle }} >
          <Swipeout
            right={swipeoutBtns(this.deleteMantra, this.props.editMantra)}
            style={containerStyles}
            autoClose
            sensitivity={50}
          >
            <View style={style.wrapper}>
              <Text style={style.text}>{this.props.title}</Text>
              {syncIcon}
            </View>
          </Swipeout>
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

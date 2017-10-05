/* eslint max-lines: 0 */
import React, { Component } from 'react';
import { Alert, Animated } from 'react-native';
import PropTypes from 'prop-types';
import MantraRender from 'components/Mantra/Mantra.render';

const outAnimationTiming = 300;
const animationTimeout = 100;

/**
 * Mantra Component, handles logic, state and animations when rendering a
 * users mantra in a list
 *
 * @type {class}
 */
class Mantra extends Component {
  /**
   * Initialise class
   *
   * @param  {object} props Props passed to component
   * @return {void}       No return
   */
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
    this.onLayout = this.onLayout.bind(this);
  }

  /**
   * Runs when component recieves new props. Use to start animating out if
   * deleted, start fading the sync icon if online and whether to rotate the
   * sync icon
   *
   * @param  {boolean} deletedProp  Is the mantra deletedProp
   * @param  {boolean} deletedState Was the mantra previosuly deleted
   * @param  {boolean} online       Is the mantra saved online
   * @param  {boolean} syncing      Is the mantra currently syncing
   * @return {void}              No return value
   */
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

  /**
   * Set the height of the mantra item when it is laid out. For use later when
   * animating the collapsing
   *
   * @param  {event} event The layout event object, used to get height
   * @return {void}       No return
   */
  onLayout(event) {
    this.height = event.nativeEvent.layout.height;

    if (this.height !== null && !this.props.initial) {
      this.animateIn();
    }
  }

  /**
   * Start animating the sync icons opacity to 0
   *
   * @return {void} No return value
   */
  hideSyncIcon() {
    Animated.timing(this.state.syncOpacity, {
      toValue: 0,
      duration: outAnimationTiming,
    }).start();
  }

  /**
   * Animate in a Mantra, whose height was not originally set. Animate heihgt
   * from 0 to where it should be
   *
   * @return {void} No return value
   */
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

  /**
   * Animate a Mantra's height from full to 0
   * @param  {FunctionDeclaration} callback What to do when the animation is
   * complete
   * @return {void}              No return value
   */
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

  /**
   * Show an alert when deleting a Mantra item
   *
   * @return {void} No return value
   */
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

  /**
   * Pass the props and state needed for the render component to do its thing
   *
   * @return {component} JSX component
   */
  render() {
    return (
      <MantraRender
        showSyncIcon={this.state.offlineInit}
        syncOpacity={this.state.syncOpacity}
        height={this.state.height}
        title={this.props.title}
        onLayout={this.onLayout}
        onPress={this.props.editMantra}
        syncing={this.state.syncing}
        rotation={this.props.rotation}
        initial={this.props.initial}
      />
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

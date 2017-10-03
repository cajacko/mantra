/* eslint max-lines: 0 */
import React, { PureComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { Ionicons } from '@expo/vector-icons';
import style from 'components/IconButton/IconButton.style';

/**
 * Render a circular icon button
 *
 * @type {class}
 */
class IconButton extends PureComponent {
  /**
   * Render the markup and styles for the button
   *
   * @return {component} JSX Component
   */
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={style.container}>
          <View style={style.icon}>
            <Ionicons
              name={this.props.icon}
              size={style.iconSize}
              color={style.iconColour}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default IconButton;

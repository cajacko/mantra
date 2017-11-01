import React, { PureComponent } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import style from 'components/Search/Search.style';

/**
 * Render the search component. Displays a search input and search/close icon
 *
 * @type {Class}
 */
class SearchRender extends PureComponent {
  /**
   * Initialise the component, bind the methods
   *
   * @param  {Object} props Props passed to the component
   * @return {Void}       No return value
   */
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * When the text changes, pass the new text to parent
   *
   * @param  {Event} event onChange event passed by TextInput
   * @return {Void}       No return value
   */
  onChange(event) {
    this.props.onChange(event.nativeEvent.text);
  }

  /**
   * Render the component
   *
   * @return {Component} Component to render
   */
  render() {
    return (
      <View style={style.container}>
        <TextInput
          ref={this.props.setInput}
          autoCapitalize="sentences"
          placeholder="Search"
          underlineColorAndroid="transparent"
          style={style.input}
          placeholderColor={style.placeholderColor}
          value={this.props.value}
          onChange={this.onChange}
          onBlur={() => this.props.focusChange(false)}
          onFocus={() => this.props.focusChange(true)}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={style.button}
          onPress={this.props.buttonAction}
        >
          <Ionicons
            name={this.props.iconIsSearch ? 'ios-search' : 'ios-close'}
            size={
              this.props.iconIsSearch
                ? style.searchIconSize
                : style.closeIconSize
            }
            color={style.iconColour}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

SearchRender.propTypes = {
  value: PropTypes.string,
  buttonAction: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  iconIsSearch: PropTypes.bool.isRequired,
  setInput: PropTypes.func.isRequired,
  focusChange: PropTypes.func.isRequired,
};

SearchRender.defaultProps = {
  value: null,
};

export default SearchRender;

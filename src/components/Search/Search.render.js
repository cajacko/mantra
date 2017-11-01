import React, { PureComponent } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import style from 'components/Search/Search.style';

class SearchRender extends PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.nativeEvent.text);
  }

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
        />
        <TouchableOpacity
          style={style.button}
          onPress={this.props.buttonAction}
        >
          <Ionicons
            name={this.props.iconIsSearch ? 'ios-search' : 'ios-close'}
            size={style.iconSize}
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

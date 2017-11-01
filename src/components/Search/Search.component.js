import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchRender from 'components/Search/Search.render';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.value || null,
      focus: false,
    };

    this.onChange = this.onChange.bind(this);
    this.buttonAction = this.buttonAction.bind(this);
    this.setInput = this.setInput.bind(this);
    this.focusChange = this.focusChange.bind(this);
  }

  onChange(text) {
    this.setState({ text });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(text);
    }
  }

  setInput(input) {
    this.input = input;
  }

  buttonAction() {
    if (this.state.focus === false) {
      this.input.focus();
    } else if (this.state.text === '') {
      this.input.blur();
    } else {
      this.onChange('');
    }
  }

  focusChange(focus) {
    this.setState({ focus });
  }

  render() {
    return (
      <SearchRender
        value={this.state.text}
        buttonAction={this.buttonAction}
        onChange={this.onChange}
        iconIsSearch={!this.state.focus}
        setInput={this.setInput}
        focusChange={this.focusChange}
      />
    );
  }
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Search.defaultProps = {
  value: null,
  onChange: null,
};

export default Search;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchRender from 'components/Search/Search.render';

/**
 * Logic for the search component. Decide what icon to show, handle icon click,
 * pass onChange value
 *
 * @type {Class}
 */
class Search extends PureComponent {
  /**
   * Initialise the component, set the initial state and bind the methods
   *
   * @param  {Object} props The props passed to the component
   * @return {Void}       No return value
   */
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

  /**
   * Update the text in state when it changes, optional cll the passed onChange
   * function if given
   *
   * @param  {String} text New text from input
   * @return {Void}      No return value
   */
  onChange(text) {
    this.setState({ text });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(text);
    }
  }

  /**
   * Set the input reference, so we can manually trigger blur and focus on the
   * input
   *
   * @param {Object} input Input reference to store
   * @return {Void}      No return value
   */
  setInput(input) {
    this.input = input;
  }

  /**
   * Handler that's called when the search button is pressed.
   * - If the input is not in focus then focus it
   * - Otherwise, if the search text is empty then blur the input
   * - Otherwise reset the input
   *
   * @return {Void} No return value
   */
  buttonAction() {
    if (this.state.focus === false) {
      this.input.focus();
    } else if (this.state.text === '') {
      this.input.blur();
    } else {
      this.onChange('');
    }
  }

  /**
   * When the focus changes on the textinput, update the state
   *
   * @param  {boolean} focus Is the input focussed
   * @return {Void}       No return value
   */
  focusChange(focus) {
    this.setState({ focus });
  }

  /**
   * Render the component
   *
   * @return {component} Component to render
   */
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

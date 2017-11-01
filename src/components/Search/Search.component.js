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
      text: this.props.value || '',
      iconIsSearch: true,
      focus: false,
    };

    this.onChange = this.onChange.bind(this);
    this.buttonAction = this.buttonAction.bind(this);
    this.setInput = this.setInput.bind(this);
    this.focusChange = this.focusChange.bind(this);
  }

  /**
   * Update the text in state when it changes, optional call the passed onChange
   * function if given. Can also set the iconIsSearch prop if passed
   *
   * @param  {String} text New text from input
   * @param  {?boolean} iconIsSearch Set the iconIsSearch param
   * @return {Void}      No return value
   */
  onChange(text, iconIsSearch) {
    const state = { text };

    if (iconIsSearch !== undefined) {
      state.iconIsSearch = iconIsSearch;
    }

    this.setState(state);

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
   *   - If the input is not in focus, then this will show the search icon,
   *     otherwise it won't change
   *
   * @return {Void} No return value
   */
  buttonAction() {
    if (this.state.iconIsSearch) {
      this.input.focus();
    } else if (this.state.text === '') {
      this.input.blur();
    } else {
      this.onChange('', this.state.focus === false ? true : undefined);
    }
  }

  /**
   * When the focus changes on the textinput, update the state and decide
   * whether to show the search icon or not
   *
   * @param  {boolean} focus Is the input focussed
   * @return {Void}       No return value
   */
  focusChange(focus) {
    this.setState({
      focus,
      iconIsSearch: focus === false && this.state.text === '',
    });
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
        iconIsSearch={this.state.iconIsSearch}
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

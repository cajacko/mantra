import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmptyView from 'components/EmptyView/EmptyView';
import getAvailableSuggestions from 'helpers/getAvailableSuggestions';
import getVisibleItemsCount from 'helpers/getVisibleItemsCount';

function hasVisibleItems(items) {
  return getVisibleItemsCount(items) > 0;
}

class EmptyViewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { hasVisibleMantra: hasVisibleItems(props.items) };
  }

  componentWillReceiveProps({ items }) {
    const hasVisibleMantra = hasVisibleItems(items);

    if (this.state.hasVisibleMantra !== hasVisibleMantra) {
      this.setState({ hasVisibleMantra });
    }
  }

  render() {
    return (
      <EmptyView
        hasVisibleMantra={this.state.hasVisibleMantra}
        suggestions={this.props.suggestions}
      >
        {this.props.children}
      </EmptyView>
    );
  }
}

EmptyViewContainer.propTypes = {
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

function mapStateToProps({
  items,
  suggestions,
  addedSuggestions,
  discardedSuggestions,
}) {
  return {
    items,
    suggestions: getAvailableSuggestions(
      suggestions,
      addedSuggestions,
      discardedSuggestions,
    ),
  };
}

export default connect(mapStateToProps)(EmptyViewContainer);

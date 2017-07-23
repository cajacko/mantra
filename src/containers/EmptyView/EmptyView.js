import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmptyView from 'components/EmptyView/EmptyView';
import switchView from 'actions/switchView';

function hasVisibleItems(items) {
  let visibleItems = false;

  Object.keys(items).forEach((id) => {
    if (items[id].deleted === false) {
      visibleItems = true;
    }
  });

  return visibleItems;
}

class EmptyViewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { hasVisibleMantra: hasVisibleItems(props.items) };
    this.add = this.add.bind(this);
  }

  componentWillReceiveProps({ items }) {
    const hasVisibleMantra = hasVisibleItems(items);

    if (this.state.hasVisibleMantra !== hasVisibleMantra) {
      this.setState({ hasVisibleMantra });
    }
  }

  add() {
    this.props.dispatch(switchView('AddView'));
  }

  render() {
    return (
      <EmptyView
        hasVisibleMantra={this.state.hasVisibleMantra}
        add={this.add}
      >
        {this.props.children}
      </EmptyView>
    );
  }
}

EmptyViewContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
};

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps)(EmptyViewContainer);

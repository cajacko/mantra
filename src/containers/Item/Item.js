import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import equal from 'deep-equal';

function getItemProps(items, itemId) {
  if (!items[itemId]) {
    // eslint-disable-next-line
    console.error(`No item with ID: ${itemId}`, items, itemId);
  }

  return items[itemId];
}

function getPassedProps(props) {
  const passedProps = Object.assign({}, props);
  delete passedProps.itemId;
  delete passedProps.items;
  delete passedProps.element;
  delete passedProps.dispatch;
  return passedProps;
}

function getProps(props) {
  return {
    ...getItemProps(props.items, props.itemId),
    ...getPassedProps(props),
  };
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = getProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(getProps(nextProps));
  }

  shouldComponentUpdate(nextProps) {
    const props = getProps(nextProps);

    if (!equal(this.state, props)) {
      return true;
    }

    return false;
  }

  render() {
    const itemProps = getItemProps(this.props.items, this.props.itemId);
    const passedProps = getPassedProps(this.props);
    const Element = this.props.element;
    return <Element {...itemProps} {...passedProps} />;
  }
}

Item.propTypes = {
  // eslint-disable-next-line
  element: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  itemId: PropTypes.string.isRequired,
};

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps)(Item);

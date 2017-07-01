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
  return passedProps;
}

class Item extends Component {
  shouldComponentUpdate(nextProps) {
    const nextItemProps = getItemProps(nextProps.items, nextProps.itemId);
    const itemProps = getItemProps(this.props.items, this.props.itemId);

    if (!equal(nextItemProps, itemProps)) {
      return true;
    }

    const nextPassedProps = getPassedProps(nextProps);
    const passedProps = getPassedProps(this.props);

    if (!equal(nextPassedProps, passedProps)) {
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

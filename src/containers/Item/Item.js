import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Item = (properties) => {
  const Element = properties.element;
  const props = Object.assign({}, properties);
  const item = props.item;
  delete props.itemId;
  delete props.item;

  return <Element {...item} {...props} />;
};

Item.propTypes = {
  // eslint-disable-next-line
  element: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  // eslint-disable-next-line
  item: PropTypes.object.isRequired,
  itemId: PropTypes.number.isRequired,
};

function mapStateToProps(state, props) {
  let item = {};

  // Can't do this as uses shallow comparison for updates

  if (state.items[props.itemId]) {
    item = state.items[props.itemId];
  }

  return { item };
}

export default connect(mapStateToProps)(Item);

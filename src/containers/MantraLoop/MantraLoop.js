import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MantraLoop from 'components/MantraLoop/MantraLoop';

function returnMantraLoop(items) {
  const mantraLoop = [];
  const ids = Object.keys(items);

  ids.forEach((id) => {
    if (items[id].deleted === false) {
      mantraLoop.push(items[id]);
    }
  });

  mantraLoop.sort((a, b) => b.dateAdded - a.dateAdded);

  const idLoop = [];
  mantraLoop.forEach(({ id }) => idLoop.push({ key: id }));

  return idLoop;
}

class MantraLoopContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { mantraLoop: returnMantraLoop(props.items) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ mantraLoop: returnMantraLoop(nextProps.items) });
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.items.length !== this.props.items.length) {
      return true;
    }

    if (Object.keys(nextProps.items) !== Object.keys(this.props.items)) {
      return true;
    }

    let returnValue = false;

    Object.keys(nextProps.items).forEach((id) => {
      if (nextProps.items[id].dateAdded !== this.props.items[id].dateAdded) {
        returnValue = true;
      }
    });

    return returnValue;
  }

  render() {
    return <MantraLoop mantraLoop={this.state.mantraLoop} />;
  }
}

MantraLoopContainer.propTypes = {
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
};

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps)(MantraLoopContainer);

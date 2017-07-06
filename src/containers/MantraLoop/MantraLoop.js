import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MantraLoop from 'components/MantraLoop/MantraLoop';
import sync from 'actions/sync';

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

    this.state = {
      mantraLoop: returnMantraLoop(props.items),
      refreshing: false,
    };

    this.onRefresh = this.onRefresh.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let refreshing;

    switch (nextProps.lastAction) {
      case 'SYNC_SUCCESS':
      case 'SYNC_ERROR':
        refreshing = false;
        break;
      default:
        refreshing = this.state.refreshing;
        break;
    }

    this.setState({
      mantraLoop: returnMantraLoop(nextProps.items),
      refreshing,
    });
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

  onRefresh() {
    this.props.dispatch(sync(this.props.items, this.props.myjsonId));
    this.setState({ refreshing: true });
  }

  render() {
    return (
      <MantraLoop
        mantraLoop={this.state.mantraLoop}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
      />
    );
  }
}

MantraLoopContainer.propTypes = {
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  myjsonId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  // eslint-disable-next-line
  lastAction: PropTypes.string.isRequired,
};

function mapStateToProps({ items, myjsonId, lastAction }) {
  return { items, myjsonId, lastAction };
}

export default connect(mapStateToProps)(MantraLoopContainer);

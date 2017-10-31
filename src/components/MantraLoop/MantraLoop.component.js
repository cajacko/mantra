import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MantraLoopRender from 'components/MantraLoop/MantraLoop.render';

/**
 * Transform the items from the store into and array of ordered mantra ID's,
 * optionally filtered by title
 *
 * @param  {Object} items The items object from the store. Keyed object of
 * mantra
 * @param  {?String} filterValue The string to filter the mantrs titles by
 * @return {array}       Array of strings, representing Mantra ID's
 */
function returnMantraLoop(items, filterValue) {
  const mantraLoop = [];
  const ids = Object.keys(items);

  ids.forEach((id) => {
    const item = items[id];

    if (filterValue) {
      const title = item.title.toLowerCase();
      const test = filterValue.toLowerCase();

      if (title.includes(test)) {
        mantraLoop.push(item);
      }
    } else {
      mantraLoop.push(item);
    }
  });

  mantraLoop.sort((a, b) => b.dateAdded - a.dateAdded);

  const idLoop = [];
  mantraLoop.forEach(({ id }) => idLoop.push({ key: id }));

  return idLoop;
}

/**
 * MantraLoop component, handle refreshes, sync errors and whether to update
 * list
 *
 * @type {Class}
 * @return {void} No return value
 */
class MantraLoop extends Component {
  /**
   * Initialise the class, setting init state and binding methods
   *
   * @param  {Object} props Props passed to component
   * @return {void}       No return
   */
  constructor(props) {
    super(props);

    this.state = {
      mantraLoop: returnMantraLoop(props.items, props.filterValue),
      refreshing: false,
      initialItems: Object.keys(props.items),
    };

    this.onRefresh = this.onRefresh.bind(this);
  }

  /**
   * Handle refresh state based on sync succes/error and update loop items
   * based on the store
   *
   * @param  {Object} nextProps New props passed to component
   * @return {void}           No return
   */
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
      mantraLoop: returnMantraLoop(nextProps.items, nextProps.filterValue),
      refreshing,
    });
  }

  /**
   * Don't trigger a rerender if imformation we care about doesn't change
   *
   * @param  {Object} nextProps Props being passed to the component
   * @return {boolean}           Whether to rerender or not
   */
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

  /**
   * When the refresh trigger is made, handle syncing
   *
   * @return {void} No return
   */
  onRefresh() {
    if (this.props.myjsonId !== null) {
      this.props.sync();

      this.setState({ refreshing: true });
    }
  }

  /**
   * Pass the props and state to the render component
   * @return {component} JSX component to render
   */
  render() {
    return (
      <MantraLoopRender
        mantraLoop={this.state.mantraLoop}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        initialItems={this.state.initialItems}
        hasRefresh={this.props.myjsonId !== null}
      />
    );
  }
}

MantraLoop.propTypes = {
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  sync: PropTypes.func.isRequired,
  // eslint-disable-next-line
  lastAction: PropTypes.string.isRequired,
  myjsonId: PropTypes.string,
  filterValue: PropTypes.string,
};

MantraLoop.defaultProps = {
  myjsonId: null,
  filterValue: null,
};

export default MantraLoop;

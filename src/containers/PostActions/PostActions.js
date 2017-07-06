import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Views from 'containers/Views/Views';
import sync from 'actions/sync';

class PostActions extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.dispatch(sync(this.props.items, this.props.myjsonId));
    }, 10000);
  }

  componentWillReceiveProps({ lastAction, items, myjsonId }) {
    switch (lastAction) {
      case 'SAVE_MANTRA':
        this.props.dispatch(sync(items, myjsonId));
        break;
      case 'DELETE_MANTRA':
        this.props.dispatch(sync(items, myjsonId));
        break;
      default:
        break;
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Views />;
  }
}

PostActions.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  myjsonId: PropTypes.string.isRequired,
};

function mapStateToProps({ lastAction, items, myjsonId }) {
  return { lastAction, items, myjsonId };
}

export default connect(mapStateToProps)(PostActions);

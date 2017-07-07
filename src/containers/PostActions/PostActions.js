import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Views from 'containers/Views/Views';
import sync from 'actions/sync';
import config from 'root/package.json';
import updateVersion from 'actions/updateVersion';

class PostActions extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.dispatch(sync());
    }, 10000);
  }

  componentWillReceiveProps({ lastAction }) {
    switch (lastAction) {
      case 'SAVE_MANTRA':
      case 'DELETE_MANTRA':
        this.props.dispatch(sync());
        break;
      case 'persist/REHYDRATE': {
        if (config.version !== this.props.version) {
          this.props.dispatch(updateVersion());
        }
        break;
      }

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
  version: PropTypes.string,
};

PostActions.defaultProps = {
  version: null,
};

function mapStateToProps({ lastAction, items, myjsonId, version }) {
  return { lastAction, items, myjsonId, version };
}

export default connect(mapStateToProps)(PostActions);

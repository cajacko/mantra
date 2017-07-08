import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Views from 'containers/Views/Views';
import sync from 'actions/sync';
import config from 'root/package.json';
import updateVersion from 'actions/updateVersion';
import { setPermissionsIfChanged } from 'actions/permissions';

let hydrated = false;

class PostActions extends Component {
  componentDidMount() {
    setInterval(() => {
      if (hydrated) {
        this.props.dispatch(sync());
      }
    }, 10000);

    setInterval(() => {
      if (hydrated) {
        this.props.dispatch(setPermissionsIfChanged());
      }
    }, 3000);
  }

  componentWillReceiveProps({ lastAction, version }) {
    switch (lastAction) {
      case 'SAVE_MANTRA':
      case 'DELETE_MANTRA':
        this.props.dispatch(sync());
        break;
      case 'persist/REHYDRATE': {
        hydrated = true;

        if (config.version !== version) {
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

function mapStateToProps({
  lastAction,
  items,
  myjsonId,
  version,
  dateAskedForPermission,
}) {
  return { lastAction, items, myjsonId, version, dateAskedForPermission };
}

export default connect(mapStateToProps)(PostActions);

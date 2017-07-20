import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Views from 'containers/Views/Views';
import sync from 'actions/sync';
import config from 'root/package.json';
import updateVersion from 'actions/updateVersion';
import { setPermissionsIfChanged } from 'actions/permissions';

let hydrated = false;
let startSync = false;

class PostActions extends Component {
  constructor(props) {
    super(props);

    this.startSync = this.startSync.bind(this);
  }

  componentDidMount() {
    this.startSync(this.props);
  }

  componentWillReceiveProps(props) {
    this.startSync(props);

    switch (props.lastAction) {
      case 'SAVE_MANTRA':
      case 'DELETE_MANTRA':
        this.props.dispatch(sync());
        break;
      case 'persist/REHYDRATE': {
        hydrated = true;

        if (config.version !== props.version) {
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

  startSync(props) {
    if (props.myjsonId && startSync === false) {
      startSync = true;

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
  }

  render() {
    return <Views />;
  }
}

PostActions.propTypes = {
  dispatch: PropTypes.func.isRequired,
  version: PropTypes.string,
  myjsonId: PropTypes.string,
  lastAction: PropTypes.string.isRequired,
};

PostActions.defaultProps = {
  version: null,
  myjsonId: null,
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

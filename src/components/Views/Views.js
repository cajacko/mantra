import React from 'react';
import PropTypes from 'prop-types';
import LoopView from 'components/LoopView/LoopView';
import AddView from 'containers/AddView/AddView';
import Login from 'containers/Login/Login';

const Views = ({ view, myjsonId }) => {
  if (!myjsonId) {
    return <Login />;
  }

  switch (view) {
    case 'LoopView':
      return <LoopView />;
    case 'AddView':
      return <AddView />;
    default:
      // eslint-disable-next-line
      console.error(`View does not have a corresponding component/container: ${view}`, view);
      return null;
  }
};

Views.propTypes = {
  view: PropTypes.string.isRequired,
  myjsonId: PropTypes.string,
};

Views.defaultProps = {
  myjsonId: null,
};

export default Views;

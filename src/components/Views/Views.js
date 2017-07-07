import React from 'react';
import PropTypes from 'prop-types';
import LoopView from 'components/LoopView/LoopView';
import AddView from 'containers/AddView/AddView';
import Login from 'containers/Login/Login';
import ProfileView from 'containers/ProfileView/ProfileView';
import NavView from 'containers/NavView/NavView';
import DisplayView from 'containers/DisplayView/DisplayView';

const Views = ({ view, myjsonId }) => {
  if (!view) {
    return null;
  }

  if (!myjsonId) {
    return <Login />;
  }

  if (view === 'AddView') {
    return <AddView />;
  }

  let viewElement;

  switch (view) {
    case 'LoopView':
      viewElement = <LoopView />;
      break;
    case 'ProfileView':
      viewElement = <ProfileView />;
      break;
    case 'DisplayView':
      viewElement = <DisplayView />;
      break;
    default:
      // eslint-disable-next-line
      console.error(`View does not have a corresponding component/container: ${view}`, view);
      return null;
  }

  return (
    <NavView>
      {viewElement}
    </NavView>
  );
};

Views.propTypes = {
  view: PropTypes.string,
  myjsonId: PropTypes.string,
};

Views.defaultProps = {
  myjsonId: null,
  view: null,
};

export default Views;

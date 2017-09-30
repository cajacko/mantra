import React from 'react';
import PropTypes from 'prop-types';
import LoopView from 'components/LoopView/LoopView';
import AddView from 'containers/AddView/AddView';
import Login from 'containers/Login/Login';
import ProfileView from 'containers/ProfileView/ProfileView';
import NavView from 'containers/NavView/NavView';
import DisplayView from 'containers/DisplayView/DisplayView';
import Menu from 'components/Menu/Menu.container';

const Views = ({ view, myjsonId, viewProps }) => {
  if (!view) {
    return null;
  }

  if (!myjsonId) {
    return <Login />;
  }

  if (view === 'AddView') {
    return <AddView id={viewProps.id} title={viewProps.title} />;
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
      console.error(
        `View does not have a corresponding component/container: ${view}`,
        view,
      );
      return null;
  }

  return (
    <Menu>
      <NavView>{viewElement}</NavView>
    </Menu>
  );
};

Views.propTypes = {
  view: PropTypes.string,
  myjsonId: PropTypes.string,
  // eslint-disable-next-line
  viewProps: PropTypes.object.isRequired,
};

Views.defaultProps = {
  myjsonId: null,
  view: null,
};

export default Views;

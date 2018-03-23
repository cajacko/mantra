import React from 'react';
import PropTypes from 'prop-types';
import LoopView from 'components/LoopView/LoopView.component';
import SceneAddOverview from 'components/scenes/Add/Overview';
import Login from 'containers/Login/Login';
import ProfileView from 'containers/ProfileView/ProfileView';
import NavView from 'containers/NavView/NavView';
import DisplayView from 'containers/DisplayView/DisplayView';
import WelcomeView from 'components/WelcomeView/WelcomeView.container';
import SuggestionsView from 'components/SuggestionsView/SuggestionsView.container';
import SettingsView from 'components/scenes/Settings';

/**
 * Switch between the different scenes
 * @param {string} view      The current view to display
 * @param {?object} viewProps An object of properties to pass to the viewProps
 * @param {boolean} firstTime Is this the first time the user has opened the app
 * @return {jsx}             The jsx markup to render
 */
const Entry = ({ view, viewProps, firstTime }) => {
  if (!view) {
    return null;
  }

  if (view === 'WelcomeView' || firstTime) {
    return <WelcomeView />;
  }

  if (view === 'AddView') {
    return <SceneAddOverview id={viewProps.id} title={viewProps.title} />;
  }

  let viewElement;

  switch (view) {
    case 'SettingsView':
      viewElement = <SettingsView />;
      break;
    case 'SuggestedView':
      viewElement = <SuggestionsView />;
      break;
    case 'LoginRegisterView':
      viewElement = <Login />;
      break;
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
        view
      );
      return null;
  }

  return <NavView>{viewElement}</NavView>;
};

Entry.propTypes = {
  view: PropTypes.string,
  // eslint-disable-next-line
  viewProps: PropTypes.object.isRequired,
  firstTime: PropTypes.bool.isRequired,
};

Entry.defaultProps = {
  myjsonId: null,
  view: null,
};

export default Entry;

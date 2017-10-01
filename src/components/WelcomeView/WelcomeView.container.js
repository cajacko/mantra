/* @flow */

import { connect } from 'react-redux';
import WelcomeView from 'components/WelcomeView/WelcomeView.component';
import switchView from 'actions/switchView';

const mapDispatchToProps = dispatch => ({
  finish: () => dispatch(switchView('DisplayView')),
});

export default connect(undefined, mapDispatchToProps)(WelcomeView);

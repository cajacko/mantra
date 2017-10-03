/* @flow */

import { connect } from 'react-redux';
import WelcomeView from 'components/WelcomeView/WelcomeView.component';
import switchView from 'actions/switchView';

/**
 * Get data from the store and pass it to the component
 *
 * @param  {?string} myjsonId Logged in users id
 * @param  {object} items    Mantra items, keyed by ID
 * @return {object}          Props to pass to component
 */
const mapStateToProps = ({ items }) => ({
  itemsCount: Object.keys(items).length,
});

/**
 * Map dispatch actions to prop to pass to the component.
 *
 * @param  {function} dispatch Dispatch function to send actions to the store
 * @return {object}          Object mapping props for the component
 */
const mapDispatchToProps = dispatch => ({
  finish: (itemsCount) => {
    let location = 'DisplayView';

    // If there are no mantra items then go to the suggestions view
    if (itemsCount === 0) {
      location = 'SuggestedView';
    }

    dispatch(switchView(location));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeView);

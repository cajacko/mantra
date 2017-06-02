import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from 'components/App/App';

class AppContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // setInterval(() => {
    //   console.log('yay');
    // }, 1000);
  }

  render() {
    return <App />;
  }
}

AppContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(AppContainer);

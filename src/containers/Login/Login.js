/* eslint max-lines: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import Login from 'components/Login/Login';
import login from 'actions/login';
import register from 'actions/register';

const timeoutLength = 10000;
let loginCallId = 0;
let registerCallId = 0;

function returnResponseError(response) {
  if (!response) {
    return 'NO RESPONSE';
  }

  if (response.status === 404) {
    return 'Incorrect ID';
  }

  if (!response.items) {
    return 'Invalid response';
  }

  return false;
}

function error(message) {
  Alert.alert('Error', message, [{ text: 'Cancel' }]);
}

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      loginActivity: false,
      registerActivity: false,
      modal: null,
      loginLastId: null,
    };

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ id: event.nativeEvent.text });
  }

  login() {
    if (this.state.loginActivity && this.state.loginLastId === this.state.id) {
      return;
    }

    this.setState({
      loginActivity: true,
      loginLastId: this.state.id,
      registerActivity: false,
    });

    registerCallId += 1;

    const loginActivity = false;
    const loginId = this.state.id;

    let timeout = false;

    setTimeout(() => {
      if (this.state.loginActivity) {
        this.setState({ loginActivity });
        error('Login timed out, try again with faster internet');
        timeout = true;
      }
    }, timeoutLength);

    loginCallId += 1;
    const localLoginId = loginCallId;

    fetch(`https://api.myjson.com/bins/${this.state.id}`)
      .then(response => response.json())
      .then((payload) => {
        if (localLoginId !== loginCallId) {
          return;
        }

        if (timeout) {
          return;
        }

        if (loginId !== this.state.loginLastId) {
          return;
        }

        const err = returnResponseError(payload);

        if (err) {
          this.setState({ loginActivity });
          error('Incorrect ID');
        } else {
          this.setState({ loginActivity });
          this.props.dispatch(login(this.state.id, payload));
        }
      })
      .catch(() => {
        error('Sorry we could not connect to our service, try again later');
        this.setState({ loginActivity });
      });
  }

  register() {
    if (this.state.registerActivity) {
      return;
    }

    this.setState({ registerActivity: true, loginActivity: false });
    const registerActivity = false;
    loginCallId += 1;

    let timeout = false;

    setTimeout(() => {
      if (this.state.registerActivity) {
        this.setState({ registerActivity });
        error('Register timed out, try again with faster internet');
        timeout = true;
      }
    }, timeoutLength);

    registerCallId += 1;
    const registerId = registerCallId;

    fetch('https://api.myjson.com/bins', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: {} }),
    })
      .then(response => response.json())
      .then((payload) => {
        if (registerId !== registerCallId) {
          return;
        }

        if (timeout) {
          return;
        }

        if (!payload || !payload.uri) {
          error('Could not create account, try again later');
          this.setState({ registerActivity });
        } else {
          this.setState({ registerActivity });
          this.props.dispatch(register(payload.uri));
        }
      })
      .catch(() => {
        error('Sorry we could not connect to our service, try again later');
        this.setState({ registerActivity });
      });
  }

  render() {
    if (this.state.modal) {
      Alert.alert('Error', this.state.modal, [{
        text: 'Cancel',
        onPress: () => this.setState({ modal: null }),
      }]);
    }

    return (
      <Login
        login={this.login}
        register={this.register}
        onChange={this.onChange}
        id={this.state.id}
        loginActivity={this.state.loginActivity}
        registerActivity={this.state.registerActivity}
      />
    );
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginContainer);

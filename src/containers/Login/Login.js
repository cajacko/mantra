import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import Login from 'components/Login/Login';
import login from 'actions/login';
import register from 'actions/register';

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
    };

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ id: event.nativeEvent.text });
  }

  login() {
    this.setState({ loginActivity: true });
    const loginActivity = false;

    fetch(`https://api.myjson.com/bins/${this.state.id}`)
      .then((response) => {
        // For some reason this call was hangin without
        // this comment line in place. VBery confusing
        response.json();
      })
      .then((payload) => {
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
    this.setState({ registerActivity: true });
    const registerActivity = false;

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

import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    this.modalClose = this.modalClose.bind(this);
  }

  onChange(event) {
    this.setState({ id: event.nativeEvent.text });
  }

  login() {
    this.setState({ loginActivity: true });
    const loginActivity = false;

    fetch(`https://api.myjson.com/bins/${this.state.id}`)
      .then(response => response.json())
      .then((payload) => {
        const err = returnResponseError(payload);

        if (err) {
          this.setState({ modal: 'Incorrect ID', loginActivity });
        } else {
          this.setState({ modal: null, loginActivity });
          this.props.dispatch(login(this.state.id, payload));
        }
      })
      .catch(() => this.setState({ modal: 'Sorry we could not connect to our service, try again later', loginActivity }));
  }

  modalClose() {
    this.setState({ modal: null });
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
          this.setState({ modal: 'Could not create account, try again later', registerActivity });
        } else {
          this.setState({ modal: null, registerActivity });
          this.props.dispatch(register(payload.uri));
        }
      })
      .catch(() => this.setState({ modal: 'Sorry we could not connect to our service, try again later', registerActivity }));
  }

  render() {
    return (
      <Login
        login={this.login}
        register={this.register}
        onChange={this.onChange}
        id={this.state.id}
        loginActivity={this.state.loginActivity}
        registerActivity={this.state.registerActivity}
        modal={this.state.modal}
        modalClose={this.modalClose}
      />
    );
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginContainer);

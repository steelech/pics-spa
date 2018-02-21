import React from 'react';

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(JSON.stringify(response));
  }
  return response;
}

const createResponseObj = (res) => {
  return new Promise((resolve, reject) => {
    res.json()
      .then((responseBody) => {
        resolve({
          body: responseBody,
          status: res.status,
          ok: res.ok
        })
      })
  })
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  authenticate() {
    return new Promise((resolve, reject) => {
      var responseObj = {};
      fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: new Headers({
          'Content-Type': 'application/json'
        })

      })
      .then(createResponseObj)
      .then(handleErrors)
      .catch(err => {
        reject(JSON.parse(err.message))
      })
      .then(response => {
        resolve(response)
      })
    });
  }
  handleAuthenticationAttempt() {
    this.authenticate()
      .then((response) => {
        this.props.onAuthenticate(response.body);
      })
      .catch((error) => {
        // re-render with error message
      })
  }
  changeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  changePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    return (
      <div>
        Login
        <input
          placeholder="username"
          value={this.state.username}
          onChange={(e) => this.changeUsername(e)}
        />
        <input
          type='password'
          placeholder="password"
          value={this.state.password}
          onChange={(e) => this.changePassword(e)}
        />
        <button onClick={() => this.handleAuthenticationAttempt()}>
          Submit
        </button>
      </div>
    )
  }
}

export default Login;

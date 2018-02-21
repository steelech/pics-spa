import React from 'react';
import { login } from '../utils/authentication';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleAuthenticationAttempt() {
    login(this.state)
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

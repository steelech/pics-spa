import React from 'react';
import { login } from '../utils/authentication';
import LoginForm from '../components/login/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleAuthenticationAttempt(state) {
    login(state)
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
        <LoginForm onLogin={(state) => this.handleAuthenticationAttempt(state)}/>
      </div>
    )
  }
}

export default Login;

import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    })
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    })
  }
  handleSubmit() {
    this.props.onLogin(this.state);
  }
  render() {
    return (
      <div>
        Login
        <input
          placeholder="username"
          value={this.state.username}
          onChange={(e) => this.handleUsernameChange(e)}
        />
        <input
          type='password'
          placeholder="password"
          value={this.state.password}
          onChange={(e) => this.handlePasswordChange(e)}
        />
        <button onClick={() => this.handleSubmit()}>
          Submit
        </button>
      </div>
    )
  }
}

export default LoginForm;

import React from 'react';
import styles from '../../../styles/components/login/login-form.less';

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
      <div className='login-form'>
        <div className='login-form-header'>
          <h2>Login</h2>
        </div>
        <div className='login-form-inputs'>
          <div className='login-form-username'>
            <div className='input-icon'>
              <i className="fa fa-user"></i>
            </div>
            <input
              autoFocus
              placeholder="Username"
              value={this.state.username}
              onChange={(e) => this.handleUsernameChange(e)}
            />
          </div>
          <div className='login-form-password'>
            <div className='input-icon'>
              <i className="fa fa-lock"></i>
            </div>
            <input
              type='password'
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.handlePasswordChange(e)}
            />
          </div>
        </div>
        <div className='login-form-submit'>
          <div
            className='login-submit-button'
            onClick={() => this.handleSubmit()}
          >
            Submit
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;

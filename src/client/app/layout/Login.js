import React from 'react';
import { login } from '../utils/authentication';
import LoginForm from '../components/login/LoginForm';
import styles from '../../styles/layout/login.less';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showForm: true,
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
  handleLoginToggle() {
    this.setState({
      showForm: !this.state.showForm,
    })
  }
  render() {
    return (
      <div className='login'>
        <div className='login-form-toggle'>
          <i className='fa fa-tree'
            onClick={() => this.handleLoginToggle()}
          />
        </div>
        {this.state.showForm
          ? <LoginForm onLogin={(state) => this.handleAuthenticationAttempt(state)}/>
          : null
        }
      </div>
    )
  }
}

export default Login;

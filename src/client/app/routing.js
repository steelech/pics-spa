import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { authenticate, Auth } from "./utils/authentication";

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: Auth.isAuthenticated(),
    }
  }
  componentDidMount() {
    if (this.state.authenticated) {
      authenticate(localStorage.getItem('jwt'))
        .catch((err) => {
          Auth.logout()
          this.setState({
            authenticated: false,
          });
        })
    }
  }
  onLogout() {
    Auth.logout();
    this.setState({
      authenticated: false,
    })
  }
  render() {
    const component = () => {
      return (
        Auth.isAuthenticated()
        ? (
          <this.props.component
            onLogout={() => this.onLogout()}
            {...this.props.componentProps}
          />
        ) : (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )
      )
    }
    return (
      <Route
        {...this.props}
        component={component}
      />
    )
  }
}

class UnAuthenticatedRoute extends React.Component {
  onAuthenticate(token) {
    Auth.authenticate(token)
      .then(() => {
        this.setState({
          authenticated: true
        });
      });
  }
  render() {
    const component = () => {
      return (
        Auth.isAuthenticated()
        ? (
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        ) : (
          <this.props.component
            onAuthenticate={(res) => this.onAuthenticate(res)}
            {...this.props.componentProps}
          />
        )
      )
    }
    return (
      <Route
        {...this.props}
        component={component}
      />
    )
  }
}

export { Auth, PrivateRoute, UnAuthenticatedRoute }

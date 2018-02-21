import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

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

const authenticate = (token) => {
  return new Promise((resolve, reject) => {
    var responseObj = {};
    fetch('http://localhost:5000/', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
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

const Auth = {
  isAuthenticated: () => {
    return localStorage.getItem('jwt');
  },
  authenticate: (token) => {
    localStorage.setItem('jwt', token);
  },
  logout: () => {
    localStorage.removeItem('jwt');
  }
}

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
    Auth.authenticate(token);
    this.setState({
      authenticated: true
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
            onAuthenticate={(res) => this.onAuthenticate(res.token)}
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

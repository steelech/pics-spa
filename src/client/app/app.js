import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Login from './layout/Login';
import Base from './layout/Base';
import { Auth, PrivateRoute, UnAuthenticatedRoute } from './routing';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
    }
  }
  render () {
    return (
      <div>
        <UnAuthenticatedRoute exact path="/login" component={Login} />
        <PrivateRoute
          exact
          path="/"
          component={Base}
          componentProps={{
          }}
        />
      </div>
    )
  }
}

export { Auth };

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);

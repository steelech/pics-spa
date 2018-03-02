import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Login from './layout/Login';
import Base from './layout/Base';
import { PrivateRoute, UnAuthenticatedRoute } from './routing';
import 'font-awesome/less/font-awesome.less';

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
        <Switch>
          <UnAuthenticatedRoute exact path="/login" component={Login} />
          <PrivateRoute
            path="/"
            component={Base}
            componentProps={{
            }}
          />
        </Switch>
      </div>
    )
  }
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
